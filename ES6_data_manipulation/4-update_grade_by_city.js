export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  const gradesMap = new Map(newGrades.map((g) => [g.studentId, g.grade]));

  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: gradesMap.get(student.id) ?? 'N/A',
    }));
}
