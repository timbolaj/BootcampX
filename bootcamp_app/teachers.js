const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const text = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;
`;
const cohortName = [`%${process.argv[2]}%`];

pool.query(text, cohortName)
.then(res => {
  console.log('connected')
  res.rows.forEach(obj => {
    console.log(`${obj.cohort}: ${obj.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));