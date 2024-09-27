import React, { useEffect, useRef } from 'react'

function TenthMarksSheet() {

     let firstNameInputRef = useRef();
     let lastNameInputRef = useRef();
     let engInputRef = useRef();
     let telInputRef = useRef();
     let hindiInputRef = useRef();
     let sciInputRef = useRef();
     let socInputRef = useRef();
     let mathsInputRef = useRef();
     let resultLblRef = useRef();
     let engSpanRef = useRef();
     let telSpanRef = useRef();
     let hindiSpanRef = useRef();
     let sciSpanRef = useRef();
     let socSpanRef = useRef();
     let mathsSpanRef = useRef();



     useEffect(() => {
        alert("components loaded");


     },[]);





  return (
    <div>
        <form>
            <div>
                <label>FirstName</label>
                <input ref={firstNameInputRef}></input>
                <span></span>
                
               
            </div>


            <div>
                <label>LastName</label>
                <input ref={lastNameInputRef}></input>
                <span></span>
               
            </div>



            <div>
                <label>English</label>
                <input
                 type="number"
                 ref={engInputRef}
                 onFocus={() => {
                    console.log("eng.onFocus");
                    engInputRef.current.style.backgroundColor
                    ="red";

                 }}
                 onChange={() => {
                    console.log("eng.onChange");
                    console.log(engInputRef.current.value);
       
                  let marks = Number(engInputRef.current.value);


                  engSpanRef.current.innerHTML = marks >= 35?
                  "pass" : "fail";


                  engSpanRef.current.style.backgroundColor = marks >= 35?
                  "green" : "red";

                   

                 }}

                 onBlur={() => {
                    console.log("eng.onBlur");
                  

                 }}
                 
                
                 ></input>
                <span ref={engSpanRef}></span>
               
            </div>


            <div>
                <label>Telugu</label>
                <input
                 type="number"
                  ref={telInputRef}
                  onFocus={() => {
                    console.log("tel.onFocus");
                    telInputRef.current.style.backgroundColor
                    ="aqua";

                 }}
                 onChange={() => {
                    console.log("tel.onChange");
                    console.log(telInputRef.current.value);
                  let marks = Number(telInputRef.current.value);


                  telSpanRef.current.innerHTML = marks >= 35?
                  "pass" : "fail";


                  telSpanRef.current.style.backgroundColor = marks >= 35?
                  "green" : "red";
                 }}

                 onBlur={() => {
                    console.log("tel.onBlur");
                  

                 }}
                
                ></input>
                <span ref={telSpanRef}></span>
               
            </div>


            <div>
                <label>Hindi</label>
                <input type="number" 
                ref={hindiInputRef}
                onFocus={() => {
                    console.log("hindi.onFocus");
                    hindiInputRef.current.style.backgroundColor
                    ="blue";

                 }}
                 onChange={() => {
                    console.log("hindi.onChange");
                    console.log(hindiInputRef.current.value);
                  let marks = Number(hindiInputRef.current.value);


                  hindiSpanRef.current.innerHTML = marks >= 35?
                  "pass" : "fail";


                  hindiSpanRef.current.style.backgroundColor = marks >= 35?
                  "green" : "red";

                   

                 }}

                 onBlur={() => {
                    console.log("hindi.onBlur");
                  

                 }}
                ></input>
                <span ref={hindiSpanRef}></span>
               
            </div>



            <div>
                <label>Sci</label>
                <input type="number"
                 ref={sciInputRef}
                 onFocus={() => {
                    console.log("sci.onFocus");
                    sciInputRef.current.style.backgroundColor
                    ="green";

                 }}
                 onChange={() => {
                    console.log("sci.onChange");
                    console.log(sciInputRef.current.value);
                  let marks = Number(sciInputRef.current.value);


                  sciSpanRef.current.innerHTML = marks >= 35?
                  "pass" : "fail";


                  sciSpanRef.current.style.backgroundColor = marks >= 35?
                  "green" : "red";

                   

                 }}

                 onBlur={() => {
                    console.log("sci.onBlur");
                  

                 }}
                 ></input>
                <span ref={sciSpanRef}></span>
               
            </div>


            <div>
                <label>Soc</label>
                <input type="number"
                 ref={socInputRef}
                 onFocus={() => {
                    console.log("soc.onFocus");
                    socInputRef.current.style.backgroundColor
                    ="yellow";

                 }}
                 onChange={() => {
                    console.log("soc.onChange");
                    console.log(socInputRef.current.value);
                  let marks = Number(socInputRef.current.value);


                  socSpanRef.current.innerHTML = marks >= 35?
                  "pass" : "fail";


                  socSpanRef.current.style.backgroundColor = marks >= 35?
                  "green" : "red";

                   

                 }}

                 onBlur={() => {
                    console.log("soc.onBlur");
                  

                 }}
                 ></input>
                <span ref={socSpanRef}></span>
               
            </div>


            <div>
                <label>Maths</label>
                <input type="number" 
                ref={mathsInputRef}
                onFocus={() => {
                    console.log("maths.onFocus");
                    mathsInputRef.current.style.backgroundColor
                    ="orange";

                 }}
                 onChange={() => {
                    console.log("maths.onChange");
                    console.log(mathsInputRef.current.value);
                  let marks = Number(mathsInputRef.current.value);


                  mathsSpanRef.current.innerHTML = marks >= 35?
                  "pass" : "fail";


                  mathsSpanRef.current.style.backgroundColor = marks >= 35?
                  "green" : "red";

                   

                 }}

                 onBlur={() => {
                    console.log("maths.onBlur");
                  

                 }}
                ></input>
                <span ref={mathsSpanRef}></span>
               
            </div>

            <div>
               <button type= "button" onClick={()=>{

                let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hindiMarks= Number(hindiInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let mathsMarks = Number(mathsInputRef.current.value);


                let totalMarks = engMarks+telMarks+hindiMarks+sciMarks+socMarks+mathsMarks;


               /* alert(
                    `${firstName} ${lastName} got total marks of ${totalMarks}`
                );*/


                resultLblRef.current.innerHTML = `${firstName} ${lastName} got total marks of ${totalMarks}`








               }}>
                
                calculate Result</button>
               <br></br>
               <label ref={resultLblRef}
               className="resultLbl"></label>






               
            </div>
        </form>
      
    </div>
  )
}

export default TenthMarksSheet
