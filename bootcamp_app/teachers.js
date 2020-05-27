const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = '${cohortName}'
ORDER BY teachers.name;
`)
.then(res => {
  console.log('connected')
  res.rows.forEach(obj => {
    console.log(`${obj.cohort}: ${obj.teacher}`)
  })
})
.catch(err => console.error('query error', err.stack));