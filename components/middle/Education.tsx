
export default function Education() {
  const educationData = [
    {
      time: {
        start: "March 2006",
        end: "April 2018",
      },
      levels: "Primary to Secondary Schooling",
      place: "Little Flower Sec School",
      desc: "Successfully passed Secondary Education Examination SEE held by Ministry of Education, Nepal with a Grade Point Average of 3.35.",
    },
    {
      time: {
        start: "July 2018",
        end: "March 2020",
      },
      levels: "Intermediate in Science",
      place: "Himalayan Pyramid Higher Secondary School",
      desc: "Successfully passed Higher Secondary Education Examination held by NEB, Nepal with a Grade Point Average of 3.19.",
    },
    {
      time: {
        start: "July 2020",
        end: "Current...",
      },
      levels: "Bachelor's Degree",
      place: "St Lawrence College",
      desc: "Currently, I am studying my Bachelor's Degree in Computer Science and Information Technology in Tribhuvan University.",
    },
  ];

  return (
   
    
        <div className="education-section mt-10">
          {educationData.map((item, index) => (
            <div className="education-row flex justify-between items-center" key={index}>
                
              <div className="duration w-1 text-center" >
                {item.time.start}
                <br />
                {item.time.end}
              </div>
              <div className="vertical-line  ml-10 mb-10">
              <div className="college w-2/3 ml-10 mb-10">
                <h4>{item.levels}</h4>
                <h5>{item.place}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
            </div>
           
          ))}
        </div>
      
   
  );
}