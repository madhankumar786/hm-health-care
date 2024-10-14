import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  Box,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { BreadcrumbsNav, TestCard, TitleComponent } from "components";
import { useNavigate } from "react-router-dom";
import { TestsBanner } from "pages";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, fetchTests } from "store/store";
import { ITest } from "types";

const TestsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { tests, loading, error } = useSelector((state: any) => state.tests);
  const loaderRef = useRef<HTMLDivElement | null>(null); 
  const [page, setPage] = useState(1); 
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
        setPage((prevPage) => prevPage + 1); // Incrementing page to fetch the next set of tests
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

  // Handling empty state if no more data is available
  useEffect(() => {
    if (tests.length < page * 9) {
      setHasMore(false); // Stop fetching if there are no more results
    }
  }, [tests, page]);
  // new changes related to loading test cards ends

  return (
    <Box
      sx={{
        padding: isMobile ? "16px" : "40px",
        backgroundImage:
          "linear-gradient(to bottom right, #faeca5, #e4e7eb, #99d1ff)",
      }}
    >
       <BreadcrumbsNav />
      <TestsBanner />
      <TitleComponent title="Tests" />
      <Box sx={{ p: 0 }}>
        <Grid
          container
          className="testCardsHolder"
          sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {tests?.map((test: ITest) => (
            <Box
              key={test.id}
              sx={{ flex: 1, minWidth: isMobile ? "95%" : "31%", p: 0, m: 1 }}
              className="testCardStyle"
            >
              <TestCard test={test} />
            </Box>
          ))}
        </Grid>
        {loading && <CircularProgress />}{" "}
        {/* Showing loading spinner when loading */}
        {!hasMore && <p>No more tests available</p>}{" "}
        {/* Showing message if no more data */}
      </Box>
    </Box>
  );
};

export default TestsPage;
