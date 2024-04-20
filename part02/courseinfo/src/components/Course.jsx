import Header from './Header';
import Content from './Content';

const Course = (props) => {
  const { courses } = props;
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header title={course.name} />
            <Content parts={course.parts} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
