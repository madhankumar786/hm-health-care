import React, { useEffect, useRef, useState } from 'react';
import { Container, Grid, Box, useMediaQuery, useTheme, CircularProgress} from '@mui/material';
import { TestCard, TitleComponent } from 'components';
import { useNavigate } from 'react-router-dom';
import { TestsBanner } from 'pages';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, fetchTests } from 'store/store';
import { ITest } from 'types';

const TestsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { tests, loading, error } = useSelector((state: any) => state.tests);
  const loaderRef = useRef<HTMLDivElement | null>(null);  // Reference to the loader element
  const [page, setPage] = useState(1);  // Track the current page for pagination
  const [hasMore, setHasMore] = useState(true); 

  // useEffect(() => {
  //   dispatch(fetchTests());
  // }, [dispatch]);

  // new changes related to loading test cards starts
  useEffect(() => {
    if (hasMore) {
      dispatch(fetchTests(page));
    }
  }, [dispatch, page, hasMore]);

  // Infinite scrolling logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        setPage((prevPage) => prevPage + 1);  // Increment page to fetch the next set of tests
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, hasMore]);

  // Handle empty state if no more data is available
  useEffect(() => {
    if (tests.length < page * 9) {
      setHasMore(false);  // Stop fetching if there are no more results
    }
  }, [tests, page]);
  // new changes related to loading test cards ends

  const handleBuyNow = (title: string) => {
    alert(`Buy Now clicked for ${title}`);
  };

  const handleAddToCart = (title: string) => {
    alert(`Added ${title} to Cart`);
  };

  const handleViewDetails = (link: string) => {
    // alert(`View Details clicked for ${title}`);
    navigate(`/diagnostics/tests/${link}`)
  };

  console.log(tests,'tests786')
  return (
    <Box
    sx={{
      padding: isMobile ? "16px" : "40px",
      backgroundImage:
        "linear-gradient(to bottom right, #faeca5, #e4e7eb, #99d1ff)",
    }}
  >
    <TestsBanner />
    <TitleComponent title="Tests" />
    <Container>
      <Grid container spacing={2}>
        {tests?.map((test:ITest) => (
          <Grid item xs={12} sm={6} md={4} key={test.title}>
            <TestCard
              type={test.type}
              name={test.title}
              timeTaken={test.timeTaken}
              description={test.description}
              price={test.price}
              onBuyNow={() => handleBuyNow(test.title)}
              onAddToCart={() => handleAddToCart(test.title)}
              onViewDetails={() => handleViewDetails(test.link)}
            />
          </Grid>
          
        ))}
      </Grid>
      {loading && <CircularProgress />}  {/* Show loading spinner when loading */}
      {!hasMore && <p>No more tests available</p>}  {/* Show message if no more data */}
    </Container>
    </Box>
  );
};

export default TestsPage;
