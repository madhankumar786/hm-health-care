const fs = require('fs');

// Test names and types for variety
const testTitles = [
  'Albumin Serum', 'Dengue Test', 'Fever Panel', 'Blood Sugar Fasting', 
  'Thyroid Function Test', 'Liver Function Test', 'Malaria Test', 
  'Kidney Function Test', 'Complete Blood Count', 'Cholesterol Test',
  'Vitamin D Test', 'Calcium Test', 'Urine Analysis', 'COVID-19 RT-PCR',
  'Lipid Profile', 'HbA1c Test', 'Iron Test', 'Electrolyte Panel', 
  'HIV Screening', 'Hepatitis B Test'
];

const descriptions = [
  'To Evaluate liver disease.', 'Used to detect viral infections.', 
  'Helps diagnose common infections.', 'Determines blood sugar levels.', 
  'Assesses thyroid gland functioning.', 'Monitors liver health.', 
  'Detects malaria infection.', 'Evaluates kidney health.', 
  'Analyzes blood composition.', 'Checks cholesterol levels.', 
  'Determines Vitamin D deficiency.', 'Measures calcium levels.', 
  'Examines urine for abnormalities.', 'Detects COVID-19 infection.', 
  'Analyzes lipid levels.', 'Monitors blood sugar over time.', 
  'Tests iron levels in the body.', 'Measures electrolytes in the blood.', 
  'Screens for HIV infection.', 'Detects Hepatitis B infection.'
];

const timeTakenOptions = [
  'Reported within 8 Hrs after sample has been collected.',
  'Reported within 12 Hrs after sample has been collected.',
  'Reported within 24 Hrs after sample has been collected.',
  'Reported within 48 Hrs after sample has been collected.'
];

const types = ['test'];

const testsData = [];

// Generate 100 test objects
for (let i = 1; i <= 100; i++) {
  const randomIndex = Math.floor(Math.random() * testTitles.length);
  const test = {
    id: i,
    title: testTitles[randomIndex],
    description: `3 Tests Included: ${descriptions[randomIndex]}, ${descriptions[randomIndex]}, ${descriptions[randomIndex]}`,
    price: Math.floor(Math.random() * 3000) + 500, // Random price between 500 and 3500
    link: testTitles[randomIndex].toLowerCase().replace(/\s+/g, '-'),
    type: types[0],
    timeTaken: timeTakenOptions[Math.floor(Math.random() * timeTakenOptions.length)]
  };

  testsData.push(test);
}

// Write the tests data to db.json
const data = { testsData };

fs.writeFileSync('db.json', JSON.stringify(data, null, 2), 'utf-8');
console.log('db.json file has been generated with 100 test objects.');
