import { useState, useRef } from "react";
import axios from "axios";

export default function Enquiry(){

const rName = useRef();
const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [query,setQuery] = useState("");
const [mail,setMail] = useState("");

const hName = (event) => {setName(event.target.value);}
const hPhone = (event) => {setPhone(event.target.value);}
const hQuery = (event) => {setQuery(event.target.value);}
const hMail = (event) => {setMail(event.target.value);}

const save = (event) => {
event.preventDefault();
let data = {name,phone,query,mail};
let urladd = "https://enquiry-f2ragttfp-2021niyatigaonkar-vesacin.vercel.app/save";
axios.post(urladd,data)
.then(res => console.log(res.data))
.catch(err => console.log(err));
}



return(
<>
<center>
<h1> Contact Form </h1>
<form onSubmit={save} >
<input type="text" placeholder="Enter name" onChange={hName} value={name} ref={rName}/><br/><br/>
<input type="number" placeholder="Enter number" onChange={hPhone} value={phone} /><br/><br/>
<input type="email" placeholder="Enter email" onChange={hMail} value={mail} /><br/><br/>
<input type="textarea" placeholder="Enter your query" rows={5} cols={30} onChange={hQuery} value={query} /><br/><br/>
<input type="submit" value="save" /><br/><br/>
</form>
</center>
</>
);

}