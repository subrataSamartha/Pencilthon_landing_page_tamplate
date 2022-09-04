import React,{useState} from 'react'
import TestimonialCard from '../components/TestimonialCard';

var t = [{name:"swa",opc:'100'},{name:"chandan",opc:'0'},{name:"samartha",opc:'0'}] ;
const Testimonial = () => {
    const[slides,setSlides] = useState([...t]);
    const [index,setIndex] = useState(0);
    const goNext = () =>{
        let ind = index===slides.length-1?0:index+1;
         setIndex(ind);
         var temp = slides.map((data,indi)=>{
           console.log(indi,ind);
           if(indi===ind){
            return {
             name:data.name,
             opc:'100'
            }
           }
           return {
             name:data.name,
             opc:'0'
           }; 
         })
         setSlides(temp);
         console.log(index,ind,temp);
         }
         const goBack=()=>{
           let ind = index===0?slides.length-1:index-1;
           setIndex(ind);
           var temp = slides.map((data,indi)=>{
             console.log(indi,ind);
             if(indi===ind){
              return {
               name:data.name,
               opc:'100'
              }
             }
             return {
               name:data.name,
               opc:'0'
             }; 
           })
           setSlides(temp);
           console.log(index,ind,temp);
         }
  return (
    
    <div    className='md:h-screen w-full flex justify-center bg-body-color  '>
        <div className={`cont md:w-9/12 w-full  `}>
          <div className={`display relative  transition-all duration-500 ease-in `}>
          { slides.map((curElem)=>{
            return(
             <>
             <TestimonialCard name={curElem.name} opacity={curElem.opc} goNext={goNext} goBack={goBack} />
             </>
            )
           })}
           

        </div>

    </div>
    </div>
  )
}

export default Testimonial