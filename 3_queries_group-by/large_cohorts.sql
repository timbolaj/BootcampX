SELECT cohorts.name as cohort_name, count(cohort_id) AS student_count
FROM students 
JOIN cohorts ON students.cohort_id = cohorts.id
GROUP by cohorts.name
HAVING count(cohort_id) >= 18
ORDER BY student_count;