SELECT name, email, id, cohort_id
FROM students
WHERE phone IS null AND email <> '%gmail.com';

