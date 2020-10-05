
// Only get the evaluations corresponding to the selected course
export default (course, evaluations) => {
    return evaluations.filter((evaluation) => evaluation.course === course.className);
}