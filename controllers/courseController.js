import Course from '../model/courseSchema.js';
// import Upload from '../index.js'; // Adjust the path as needed

// Get all courses
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ courses });
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ message: 'Failed to fetch courses', error });
    }
};

// Add a new course
// export const addCourse = async (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             console.error('Error uploading image:', err);
//             return res.status(400).json({ message: 'Error uploading image', error: err });
//         } else {
//             try {
//                 // Log the request body and file to check what is being received
//                 console.log('Request Body:', req.body);
//                 console.log('Uploaded File:', req.file);

//                 const newCourseData = {
//                     title: req.body.title,
//                     description: req.body.description,
//                     photo: req.file ? req.file.path : '', 
//                 };

//                 // Log the data that will be saved to the database
//                 console.log('New Course Data:', newCourseData);

//                 const newCourse = new Course(newCourseData);
//                 const savedCourse = await newCourse.save();

//                 // Log the saved course data
//                 console.log('Saved Course:', savedCourse);

//                 res.status(201).json({ message: 'Course added successfully', course: savedCourse });
//             } catch (error) {
//                 console.error('Error adding course:', error);
//                 res.status(500).json({ message: 'Failed to add course', error });
//             }
//         }
//     });
// };
export const addCourse = async (req, res) => {
    try {
      // Log the request body and file to check what is being received
      console.log('Request Body:', req.body);
      console.log('Uploaded File:', req.file);
  
      const newCourseData = {
        title: req.body.title,
        description: req.body.description,
        photo: req.file ? req.file.path : '', 
      };
  
      // Log the data that will be saved to the database
      console.log('New Course Data:', newCourseData);
  
      const newCourse = new Course(newCourseData);
      const savedCourse = await newCourse.save();
  
      // Log the saved course data
      console.log('Saved Course:', savedCourse);
  
      res.status(201).json({ message: 'Course added successfully', course: savedCourse });
    } catch (error) {
      console.error('Error adding course:', error);
      res.status(500).json({ message: 'Failed to add course', error });
    }
  };
