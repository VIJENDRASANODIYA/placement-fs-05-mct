// const courses = [
//     { id: '1', course: 'React Tutorial', tag: 'react' },
//     { id: '2', course: 'Object-oriented programming (OOP)', tag: 'oop' },
//     { id: '3', course: 'Java Programming', tag: 'java' },
//     { id: '4', course: 'JavaScript Course', tag: 'javascript' },
//     { id: '5', course: 'Spring Boot Tutorial', tag: 'spring' },
//     { id: '6', course: 'Python Bootcamp', tag: 'python' },
//     { id: '7', course: 'Spring Framework Course', tag: 'spring' },
//     { id: '8', course: 'React with Redux', tag: 'react' },
//     { id: '9', course: 'C#: Classes and OOP', tag: 'oop' },
//     { id: '10', course: 'Java Masterclass', tag: 'java' },
//     { id: '11', course: 'ES6 JavaScript Training', tag: 'javascript' },
//     { id: '12', course: 'Learn Python Programming', tag: 'python' },
//   ];
  const uniqueTags = [...new Set(Item.map(item => item.gender))];
  console.log(uniqueTags);
  
  const ProductDetails = () => {
    const [Item, SetItem] = useState([]);
    const [checked, setChecked] = React.useState('all');
    const [filterData, setFilterData] = React.useState(courses);
  
    const gateData = () => {
        fetch("https://randomuser.me/api/?results=20")
          .then((res) => res.json())
          .then((data) =>
            // console.log();
    
            SetItem(data.results)
          );
        // console.log(All);
      };
      useEffect(() => {
        gateData();
      }, []);

    const handleFilterItems = tag => {
      setChecked(tag);
      if (tag !== 'all') {
        const filteredItems = courses.filter(item => item.tag === tag);
        setFilterData(filteredItems);
      } else {
        setFilterData(courses);
      }
    };
  
    return (
      <div>
        <input
          type="radio"
          checked={checked === 'all'}
          onChange={() => handleFilterItems('all')}
        /> All
        {uniqueTags.map((tag, index) => (
          <div key={index}>
            <input
              type="radio"
              checked={checked === tag}
              onChange={() => handleFilterItems(tag)}
            />
            {tag}
          </div>
        ))}
        {filterData.map((course) => (
          <li key={course.id}>
            {course.id}-{course.course}-{course.tag}
          </li>
        ))}
      </div>
    );
        }
        export default ProductDetails;