SELECT students.name, AVG(assignment_submissions.duration) as average_assignment_duration
FROM assignment_submissions
JOIN students on assignment_submissions.student_id = students.id
WHERE students.end_date IS NULL
GROUP BY students.name
ORDER BY AVG(assignment_submissions.duration) DESC;

