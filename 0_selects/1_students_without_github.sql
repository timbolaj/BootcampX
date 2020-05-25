/* 
Write query that will return list of students w/o github
username. 
Select id, name, email and cohort_id
*/

SELECT id, name, email, cohort_id
FROM students 
WHERE github IS NULL
ORDER BY cohort_id;
