/* 
Get names of all students from cohort 1
Select id and name
Alphabetical order
*/

SELECT id, name
FROM students
WHERE cohort_id = 1
ORDER BY name