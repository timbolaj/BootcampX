SELECT cohorts.name as cohort, count(student_id) AS total_submissions
FROM assignment_submissions
JOIN students on assignment_submissions.student_id = students.id
JOIN cohorts on students.cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY count(student_id) DESC;