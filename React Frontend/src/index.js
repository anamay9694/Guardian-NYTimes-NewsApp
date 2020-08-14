import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Search } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter, useParams, Route, Link,Switch, withRouter  } from 'react-router-dom';
import Select from 'react-select';
import AsyncSelect from "react-select/async";
import ReactSwitch from 'react-switch';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive'
import {MdShare, MdDelete} from 'react-icons/md';
import _ from "lodash";
import {FaRegBookmark, FaBookmark, FaChevronDown, FaChevronUp} from 'react-icons/fa';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareCount,
  TwitterIcon,
  EmailIcon
} from "react-share";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import commentBox from 'commentbox.io';
import BounceLoader from "react-spinners/BounceLoader";
import './index.css';
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";


const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;





const SelectedResult = ({ result }) => (
  <a style={{ color: "red" }} href={result && result.url}>
    {result && result.title}
  </a>
);




class PageWithComments extends React.Component {

    componentDidMount() {

        //this.removeCommentBox = commentBox('5739383302914048-proj');
		//this.removeCommentBox = commentBox('5667394307489792-proj');5677117685628928-proj
		this.removeCommentBox = commentBox('5677117685628928-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {

        return (
            <div className="commentbox" id="1"/>
        );
    }
}
class PageWithComments2 extends React.Component {

    componentDidMount() {

        //this.removeCommentBox = commentBox('5667394307489792-proj');
		this.removeCommentBox = commentBox('5677117685628928-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {

        return (
            <div className="commentbox" id="2"/>
        );
    }
}

class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
	  //console.log("Called:")
	var prevState=this.state.checked;
	//console.log(prevState)
	prevState=!prevState
	//console.log(prevState)
    this.setState((pre)=>{
		this.props.onToggle(pre.checked);
		return{
			checked:!pre.checked
		}
	}
	);
	//console.log("Called Switch finised");
	
  }
 
  render() {
    return (
      
	  <div className="inline">
        
		<div className="inlineswitch">
		<ReactSwitch
        checked={this.state.checked}
		onChange={this.handleChange}
		onColor="#86d3ff"
		onHandleColor="#2693e6"
		handleDiameter={30}
		uncheckedIcon={!this.state.checked}
		checkedIcon={this.state.checked}
		boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
		activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
		height={20}
		width={48}
		className="react-switch"
		id="material-switch"
          />
		  </div>
      </div>
    );
  }
}



class Home extends React.Component{
	constructor(){
		super();
		this.handleChange=this.handleChange.bind(this);
		this.highlight=this.highlight.bind(this)
		this.removeHighlight=this.removeHighlight.bind(this)
	}
	
	handleChange(){
	document.getElementsByClassName("HomeTab")[0].style.color="white";
	document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0";
	console.log("Body Handle change called")
	this.props.onPress("Home");
	localStorage.removeItem("curTab")
	localStorage.setItem("curTab","Home")
	}
	highlight(){
		document.getElementsByClassName("HomeTab")[0].style.color="white"
	}
	removeHighlight(){
		var curTab=localStorage.getItem("curTab")
		var notDisplay=localStorage.getItem("notDisplay")
		if((curTab==null || curTab== "" || curTab=="Home" ) &&(notDisplay==null || notDisplay=="false"))
		{
		}else{
			document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0"
		}
	}
	render(){
		localStorage.removeItem("notDisplay")
		localStorage.setItem("notDisplay","false")
	if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="inline-block"
	  document.getElementsByClassName("toggleDIV")[0].style.display="inline-block"
	  document.getElementsByClassName("headersspan")[1].style.display="inline-block"
	  document.getElementsByClassName("headerBookMark")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="none"
	  }
		
		
	console.log("Home Tab Called Render")
	var gua=this.props.type==true ? "Guardian" : "NYT"
	var routeTo="/Body/"+gua+"/Home"
	console.log(routeTo)
	//this.props.onPress("Home");
	return (
	 <div className="headers">
	 <Link to={routeTo}> <p className="HomeTab" onClick={this.handleChange} onMouseOver={this.highlight} onMouseOut={this.removeHighlight} > Home</p> </Link>
	 </div>
	);
	}
} 
class World extends React.Component{
	constructor(){
			super();
		this.handleChange=this.handleChange.bind(this);
		this.highlight=this.highlight.bind(this)
		this.removeHighlight=this.removeHighlight.bind(this)
	}
	
	
	handleChange() {
	 	document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("WorldTab")[0].style.color="white";
	document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0";
	console.log("World Handle change called")
	this.props.onPress("World");
	localStorage.removeItem("curTab")
	localStorage.setItem("curTab","World")
	}
    highlight(){
		document.getElementsByClassName("WorldTab")[0].style.color="white"
	}
	removeHighlight(){
		var curTab=localStorage.getItem("curTab")
		var notDisplay=localStorage.getItem("notDisplay")
		if((curTab=="World") &&(notDisplay==null || notDisplay=="false"))
		{
		}else{
			document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0"
		}
	}
	render(){
		localStorage.removeItem("notDisplay")
		localStorage.setItem("notDisplay","false")
	if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="inline-block"
	  document.getElementsByClassName("toggleDIV")[0].style.display="inline-block"
	  document.getElementsByClassName("headersspan")[1].style.display="inline-block"
	  document.getElementsByClassName("headerBookMark")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="none"
	  }
	console.log("World Tab Called Render")
	var gua=this.props.type==true ? "Guardian" : "NYT"
	var routeTo="/Body/"+gua+"/World"
	return (
	 <div className="headers">
	 <Link to={routeTo}> <p className="WorldTab" onClick={this.handleChange} onMouseOver={this.highlight} onMouseOut={this.removeHighlight}> World</p> </Link>
	 </div>
	);
	
	}
} 
class Politics extends React.Component{
	//
	constructor(){
			super();
		this.handleChange=this.handleChange.bind(this);
		this.highlight=this.highlight.bind(this)
		this.removeHighlight=this.removeHighlight.bind(this)
	}
	
	
	handleChange() {
	 	document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("PoliticsTab")[0].style.color="white";
	document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0";
	console.log("Politics Handle change called")
	this.props.onPress("Politics");
	localStorage.removeItem("curTab")
	localStorage.setItem("curTab","Politics")
	}
    highlight(){
		document.getElementsByClassName("PoliticsTab")[0].style.color="white"
	}
	removeHighlight(){
		var curTab=localStorage.getItem("curTab")
		var notDisplay=localStorage.getItem("notDisplay")
		if((curTab=="Politics") &&(notDisplay==null || notDisplay=="false"))
		{
		}else{
			document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0"
		}
	}
	render(){
		localStorage.removeItem("notDisplay")
		localStorage.setItem("notDisplay","false")
	if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="inline-block"
	  document.getElementsByClassName("toggleDIV")[0].style.display="inline-block"
	  document.getElementsByClassName("headersspan")[1].style.display="inline-block"
	  document.getElementsByClassName("headerBookMark")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="none"
	  }
	console.log("Politics Tab Called Render")
	var gua=this.props.type==true ? "Guardian" : "NYT"
	var routeTo="/Body/"+gua+"/Politics"
	return (
	 <div className="headers">
	 <Link to={routeTo}> <p className="PoliticsTab" onClick={this.handleChange} onMouseOver={this.highlight} onMouseOut={this.removeHighlight}> Politics</p> </Link>
	 </div>
	);
	
	}
} 
class Business extends React.Component{
	constructor(){
			super();
		this.handleChange=this.handleChange.bind(this);
		this.highlight=this.highlight.bind(this)
		this.removeHighlight=this.removeHighlight.bind(this)
	}
	
	
	handleChange() {
	 	document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("BusinessTab")[0].style.color="white";
	document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0";
	console.log("BusinessTab Handle change called")
	this.props.onPress("Business");
	localStorage.removeItem("curTab")
	localStorage.setItem("curTab","Business")
	}
    highlight(){
		document.getElementsByClassName("BusinessTab")[0].style.color="white"
	}
	removeHighlight(){
		var curTab=localStorage.getItem("curTab")
		var notDisplay=localStorage.getItem("notDisplay")
		if((curTab=="Business") &&(notDisplay==null || notDisplay=="false"))
		{
		}else{
			document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0"
		}
	}
	render(){
		localStorage.removeItem("notDisplay")
		localStorage.setItem("notDisplay","false")
	if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="inline-block"
	  document.getElementsByClassName("toggleDIV")[0].style.display="inline-block"
	  document.getElementsByClassName("headersspan")[1].style.display="inline-block"
	  document.getElementsByClassName("headerBookMark")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="none"
	  }
	console.log("BusinessTab  Called Render")
	var gua=this.props.type==true ? "Guardian" : "NYT"
	var routeTo="/Body/"+gua+"/Business"
	return (
	 <div className="headers">
	 <Link to={routeTo}> <p className="BusinessTab" onClick={this.handleChange} onMouseOver={this.highlight} onMouseOut={this.removeHighlight}> Business</p> </Link>
	 </div>
	);
	
	}
} 
class Technology extends React.Component{
	constructor(){
			super();
		this.handleChange=this.handleChange.bind(this);
		this.highlight=this.highlight.bind(this)
		this.removeHighlight=this.removeHighlight.bind(this)
	}
	
	
	handleChange() {
	 	document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("TechnologyTab")[0].style.color="white";
	document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0";
	console.log("TechnologyTab Handle change called")
	this.props.onPress("Technology");
	localStorage.removeItem("curTab")
	localStorage.setItem("curTab","Technology")
	}
    highlight(){
		document.getElementsByClassName("TechnologyTab")[0].style.color="white"
	}
	removeHighlight(){
		var curTab=localStorage.getItem("curTab")
		var notDisplay=localStorage.getItem("notDisplay")
		if((curTab=="Technology") &&(notDisplay==null || notDisplay=="false"))
		{
		}else{
			document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0"
		}
	}
	render(){
		localStorage.removeItem("notDisplay")
		localStorage.setItem("notDisplay","false")
	if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="inline-block"
	  document.getElementsByClassName("toggleDIV")[0].style.display="inline-block"
	  document.getElementsByClassName("headersspan")[1].style.display="inline-block"
	  document.getElementsByClassName("headerBookMark")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="none"
	  }
	console.log("TechnologyTab Called Render")
	var gua=this.props.type==true ? "Guardian" : "NYT"
	var routeTo="/Body/"+gua+"/Technology"
	return (
	 <div className="headers">
	 <Link to={routeTo}> <p className="TechnologyTab" onClick={this.handleChange} onMouseOver={this.highlight} onMouseOut={this.removeHighlight}> Technology</p> </Link>
	 </div>
	);
	
	}
} 
class Sports extends React.Component{
	constructor(){
			super();
		this.handleChange=this.handleChange.bind(this);
		this.highlight=this.highlight.bind(this)
		this.removeHighlight=this.removeHighlight.bind(this)
	}
	
	
	handleChange() {
	 	document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("SportsTab")[0].style.color="white";
	console.log("SportsTab Handle change called")
	this.props.onPress("Sports");
	localStorage.removeItem("curTab")
	localStorage.setItem("curTab","Sports")
	}
    highlight(){
		document.getElementsByClassName("SportsTab")[0].style.color="white"
	}
	removeHighlight(){
		var curTab=localStorage.getItem("curTab")
		var notDisplay=localStorage.getItem("notDisplay")
		if((curTab=="Sports") &&(notDisplay==null || notDisplay=="false"))
		{
		}else{
			document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0"
		}
	}
	render(){
		localStorage.removeItem("notDisplay")
		localStorage.setItem("notDisplay","false")
	if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="inline-block"
	  document.getElementsByClassName("toggleDIV")[0].style.display="inline-block"
	  document.getElementsByClassName("headersspan")[1].style.display="inline-block"
	  document.getElementsByClassName("headerBookMark")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="none"
	  }
	console.log("SportsTab Called Render")
	var gua=this.props.type==true ? "Guardian" : "NYT"
	var routeTo="/Body/"+gua+"/Sports"
	return (
	 <div className="headers">
	 <Link to={routeTo}> <p className="SportsTab" onClick={this.handleChange} onMouseOver={this.highlight} onMouseOut={this.removeHighlight}> Sports</p> </Link>
	 </div>
	);
	
	}
} 

class Spinner extends React.Component{
	render(){
     localStorage.removeItem("notDisplay")
	  localStorage.setItem("notDisplay","true")
	  if(document.getElementsByClassName("HomeTab")[0]!=null &&
	document.getElementsByClassName("WorldTab")[0]!=null &&
	document.getElementsByClassName("PoliticsTab")[0]!=null &&
	document.getElementsByClassName("BusinessTab")[0]!=null &&
	document.getElementsByClassName("TechnologyTab")[0]!=null &&
	document.getElementsByClassName("SportsTab")[0]!=null)
	{
	document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0";
	} 
	  
	  if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="none"
	  document.getElementsByClassName("toggleDIV")[0].style.display="none"
	  document.getElementsByClassName("headersspan")[1].style.display="none"
	  document.getElementsByClassName("headerBookMark")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="none"
	  }
	  
	return (
	 <div className="Spinner">
	 <div className="Spin">
	 <BounceLoader
	 size={60}
          color={"#123abc"}
          loading={true}
	 />
	 <span className="Loading">Loading</span>
	 </div>
	 </div>
	);
	}
} 
class SpinnerNoRefresh extends React.Component{
	render(){	
	return (
	 <div className="Spinner">
	 <div className="Spin">
	 <BounceLoader
	 size={60}
          color={"#123abc"}
          loading={true}
	 />
	 <span className="Loading">Loading</span>
	 </div>
	 </div>
	);
	}
} 


class SearchBox extends React.Component{
	
	constructor(){
		super(); 
		//this.state = { inputValue: "" };
		this.handleInputChange=this.handleInputChange.bind(this)
		this.loadOptions=this.loadOptions.bind(this)
		this.retrieveCards=this.retrieveCards.bind(this)
		this.state = { inputValue: "" };
	}
	
   handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
	console.log(this.state.inputValue)
    return inputValue;
  };
    
    retrieveCards(value){
		
		
	  fetch("https://nodeanamayproject.wn.r.appspot.com/getSearchArticles/"+value)
		.then(response=>response.json())
		.then(dataset=> {
			console.log("loggiiindndndnd dataset")
			console.log(dataset)
			console.log(JSON.stringify(dataset))
			localStorage.setItem("ArticleSearchItem",JSON.stringify(dataset) );
			this.props.history.push("/bsearch");
		})
		
		
		
	}
	onChangeFunc= (optionSelected)=> {
    const name = this.name;
    const value = optionSelected.value;
    const label = optionSelected.label;
    console.log("Logging Selected Valuesssss")
    console.log(name)
    console.log(value)
    console.log(label)
	this.props.history.push("/spin")
	this.retrieveCards(value)
	console.log(this.state.inputValue)
	this.setState({inputValue:value});
  }
  
    
	
    loadOptions(inputValue, callback){
		  console.log("Callleeddddd LoadOptions")
		  var req = new XMLHttpRequest();
		  //req.open("GET", "http://127.0.0.1:8080/getTopWords", true);
		  req.open("GET", "https://anamay-sarkar.cognitiveservices.azure.com/bing/v7.0/suggestions?q=" +inputValue, true);
		  req.onreadystatechange = addItems; // the callback
		 // req.setRequestHeader("Ocp-Apim-Subscription-Key", "15c108edbb2f45ef9e30a51f1268d103"); 79bf47f069f64f2b9d6481a8e51ead59
		  req.setRequestHeader("Ocp-Apim-Subscription-Key", "79bf47f069f64f2b9d6481a8e51ead59");
		  req.send(null);

		  var doc="";

		  function addItems() {
			if (req.readyState == 4) {
			if (req.status == 200) {
			doc =  JSON.parse(req.responseText);
			console.log(doc)
			var len=doc.suggestionGroups[0].searchSuggestions.length
			var results=doc.suggestionGroups[0].searchSuggestions
			var output=[]
			for(var i=0;i<len;i++){
			  var obj={value: results[i].displayText, label: results[i].displayText}
			  output[i]=obj;
			}
			var temp=output.filter(i=> i.label.toLowerCase().includes(inputValue.toLowerCase()));
			callback(temp)
		//creatWordCloud(doc["TopWords"]);
			}
			}
		 }
		};
	render(){
		const customStyles = {
		  control: base => ({
            ...base,
            minHeight: 30,
			height:40,
			marginTop:5,
			marginBottom:5
        }),
        dropdownIndicator: base => ({
            ...base,
            padding: 4,
			height:20,
        }),
        clearIndicator: base => ({
            ...base,
            padding: 4
        }),
        valueContainer: base => ({
            ...base,
            padding: '0px 0px',
			height: 40,
        }),
        input: base => ({
            ...base,
            marginBottom: 10,
			marginLeft:0,
			
            padding: 0
        })
		};
	return (
	 <div className="searchBOX">
	 <AsyncSelect
          cacheOptions
          loadOptions={
            _.debounce(this.loadOptions, 500, {
              leading: true
            })}
          defaultOptions
		  value={this.state.inputValue=="" ? null : {label:this.state.inputValue, value:this.state.inputValue}}
          onInputChange={this.handleInputChange}
		  onChange={this.onChangeFunc}
		  placeholder='Enter keyword ..'
        />
	 </div>
	);
	}
} 
const SearchBox2= withRouter(SearchBox)
class Error extends React.Component{
	render(){
	return (
	 <div>
	 <PageWithComments2/>
	 <p> Oops the page is missing</p>
	 </div>
	);
	}
} 

class Body extends React.Component{
	constructor(){
	   super();
	   this.state={
		   isGuardian:true
	   }

	}
	
	componentDidMount(){
		console.log("Called Body Did Mount")
		var zz=this.props.match;
		console.log(zz);
	}
	render(){
	   console.log("Inside Body Constrcutor")
	   console.log(this.props)
	   
		console.log("Called Body----");
		var zz=this.props.match;
		var Paper="Guardian"
		var Section="Home"
		var unq=Paper+Section
		console.log(zz)
		console.log(zz.params.paper)
		console.log(zz.params.section)
		if(zz.params.paper=="NYT")
		{
			Paper="NYT";
		}
		if(zz.params.section=="World")
		{
			Section="world"
		}
		if(zz.params.section=="Politics")
		{
			Section="politics"
		}
		if(zz.params.section=="Business")
		{
			Section="business"
		}
		if(zz.params.section=="Technology")
		{
			Section="technology"
		}
		if(zz.params.section=="Sports")
		{
			Section="sports"
		}
		if(zz.params.section=="Sports" && zz.params.paper=="NYT")
		{
			Section="sports"
		}else if(zz.params.section=="Sports")
		{
			Section="sport"
		}
		console.log("Section is " + Section)
		if(Section=="Home")
		{
			return (
			 <div>
			 <BodyCards paper={Paper}/>
			 </div>
			);
			
		}else{
			return (
			 <div>
			 <BodyCardsTab paper={Paper} section={Section}/>
			 </div>
			);
		}
    }
	
} 

class BodySearch extends React.Component{
	constructor(){
	   super();
	}
	
	componentDidMount(){
		console.log("Called BodySearch Did Mount")
		//var zz=this.props.guardian;
		
		//console.log(zz);
	}
	render(){
		
		localStorage.removeItem("notDisplay")
	  localStorage.setItem("notDisplay","true")
	  if(document.getElementsByClassName("HomeTab")[0]!=null &&
	document.getElementsByClassName("WorldTab")[0]!=null &&
	document.getElementsByClassName("PoliticsTab")[0]!=null &&
	document.getElementsByClassName("BusinessTab")[0]!=null &&
	document.getElementsByClassName("TechnologyTab")[0]!=null &&
	document.getElementsByClassName("SportsTab")[0]!=null)
	{
	document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0";
	} 
	  
	  if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="none"
	  document.getElementsByClassName("toggleDIV")[0].style.display="none"
	  document.getElementsByClassName("headersspan")[1].style.display="none"
	  document.getElementsByClassName("headerBookMark")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="none"
	  }
		
	   console.log("Inside Body Search Constrcutor")
	   console.log(this.props)
	   
		console.log("Called Body Search----");
		//var zz=this.props.match.params.content;
		//var zz=resJSON
		
		var zz=JSON.parse(localStorage.getItem("ArticleSearchItem"))
		//console.log(zz.params.content)
		//console.log(zz.params.section)
		console.log(zz)
		var GuardianRes=zz['guar']
		var NyRes=zz['ny']
		
		//if(pap=="Guardian"){
			const validCardsGuar=GuardianRes.response.results.filter(function(card){
			if(card.id==''|| card.blocks.body.length==0 )
			{
				return false;
			}else{
				return true;
			}
			});
			//card.blocks.main== undefined || card.blocks.main.elements ==undefined || card.blocks.main.elements.length==0 || card.blocks.main.elements[0].assets.length == 0
			var GCards=validCardsGuar
				var defGuarURL="https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
				for(var i=0;i<GCards.length;i++)
				{
					if(GCards[i].blocks.main== undefined|| GCards[i].blocks.main.elements ==undefined||GCards[i].blocks.main.elements.length==0 || GCards[i].blocks.main.elements[0].assets.length == 0)
					{
						GCards[i].blocks.main={element:defGuarURL}
					}else{
						GCards[i].blocks.main.element=GCards[i].blocks.main.elements[0].assets[GCards[i].blocks.main.elements[0].assets.length-1].file
					}
				}
				
			const cardsToPassGuar=GCards.map(function(card){
			return <SmallCard key={card.id} keys={card.id} WebURL={card.webUrl} type="g" ImageURL={card.blocks.main.element}
			Title={(card.webTitle).replace("%","Percent")} Section={card.sectionId} Dates={card.webPublicationDate} Description={card.blocks.body[0].bodyTextSummary}/>
			});
			console.log(cardsToPassGuar);
			//console.log(typeof(cardsToPass))
			//console.log(this.state.data.response.results[0].blocks.main.elements[0].assets[0].file)
			//return (<div> {cardsToPass}</div>)
			console.log("Ressss")
			console.log(NyRes)
			console.log(GuardianRes)
			
			
			//
			var defURLNY="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
				const validCardsNY=NyRes.response.docs.filter(function(card){
				if(card.url=='')
				{
					return false;
				}else{
					return true;
				}
				});
				//card.multimedia.length==0
				console.log("Logging Valid Body Cards NYT")
				console.log(validCardsNY)
				
				var vc=validCardsNY
				
				for(var i=0;i<vc.length;i++)
				{
					var sz=vc[i].multimedia.length
					console.log(i)
					console.log(sz)
					if(sz==0){
						vc[i].multimedia=[]
						var obj={url: defURLNY }
						vc[i].multimedia.push(obj)
					}else{
						var arr=[]
						console.log("next")
						for(var j=0;j<sz;j++)
						{
							console.log(vc[i].multimedia[j])
							if(vc[i].multimedia[j].width >=2000)
							{
								console.log("insize")
								vc[i].multimedia[j].url="https://www.nytimes.com/"+vc[i].multimedia[j].url
								arr.push(vc[i].multimedia[j])
								break;
							}
						}
						if(arr.length==0)
						{
							vc[i].multimedia=[]
							var obj={url: defURLNY }
							vc[i].multimedia.push(obj)
						}else{
							vc[i].multimedia=[]
							vc[i].multimedia.push(arr[0])
						}
					}
				}
			
			//
				// const validCardsNY=NyRes.response.docs.filter(function(card){
				// if(card.multimedia.length==0)
				// {
					// return false;
				// }else{
					// return true;
				// }
				// });
				// console.log(validCardsNY)
				console.log("Reached Herherher");
				const cardsToPassNY=vc.map(function(card){
				return <SmallCard key={card.web_url} keys={card.web_url} WebURL={card.web_url} type="n" ImageURL={ card.multimedia[0].url} 
				Title={(card.headline.main).replace("%","Percent")} Section={card.news_desk} Dates={card.pub_date} Description={card.abstract}/>
				});
				
				console.log(cardsToPassNY);
				var cardsToPassFinal=cardsToPassGuar
				var lenCards=cardsToPassNY.length
				for(var i=0;i<lenCards;i++){
					cardsToPassFinal.push(cardsToPassNY[i])
				}
				console.log(cardsToPassFinal)
				//console.log(typeof(cardsToPass))
				//console.log(this.state.data.response.results[0].blocks.main.elements[0].assets[0].file)
				//return (<div> {cardsToPass}</div>)
			
		
		
		
		
		
		
		
		return (
		<div>
		<div className="SearchResults">
		Results
		</div>
		<div>
		{cardsToPassFinal}
		</div>
		</div>
		)
	
    }
	
} 


class BodySearchFavourite extends React.Component{
	constructor(){
	   super();
	}
	
	componentDidMount(){
		console.log("Called BodySearchFavourite Did Mount")
		//var zz=this.props.guardian;
		
		//console.log(zz);
	}
	render(){
		localStorage.removeItem("notDisplay")
	  localStorage.setItem("notDisplay","true")
	  if(document.getElementsByClassName("HomeTab")[0]!=null &&
	document.getElementsByClassName("WorldTab")[0]!=null &&
	document.getElementsByClassName("PoliticsTab")[0]!=null &&
	document.getElementsByClassName("BusinessTab")[0]!=null &&
	document.getElementsByClassName("TechnologyTab")[0]!=null &&
	document.getElementsByClassName("SportsTab")[0]!=null)
	{
	document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0";
	} 
	  
	  if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="none"
	  document.getElementsByClassName("toggleDIV")[0].style.display="none"
	  document.getElementsByClassName("headersspan")[1].style.display="none"
	  document.getElementsByClassName("headerBookMark")[0].style.display="none"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.color="white"
	  }
		var zz=JSON.parse(localStorage.getItem("BookMarkCards"))
		var cardsToPass=""
		console.log("herer")
		console.log(zz)
		if(zz==null || zz.length==0)
		{
			console.log("No cards")
			//No Favourite
			return (
	  <div className="noFavorite">
	  You have no saved articles
	  </div>)
		}else{
			console.log("Yes cards")
			cardsToPass=zz.map(function(card){
				return <SmallCardFavourite key={card.key} keys={card.keys} WebURL={card.WebURL} type={card.type} ImageURL={card.ImageURL} Title={card.Title} Section={card.Section} Dates={card.Dates} Description={card.Description}/>
			});
			return (
			<div>
			<div className="favoriteCards">
			Favorites
			</div>
			<div>{cardsToPass}</div>
			</div>
			)
		}
	  
	    
    }
	
} 
class About extends React.Component{
	render(){
	return (
	 <div>
	 <p> Theis is the about page</p>
	 </div>
	);
	}
} 

class Header extends React.Component{
	constructor(){
		super();
		this.state={
			isGuardian: true,
			currentSelection: "Home"
		};
		this.handleClick= this.handleClick.bind(this);
		this.changeSelection =this.changeSelection.bind(this);
		this.displayBookMarks=this.displayBookMarks.bind(this);
	}
	handleClick(value){
	   this.setState({isGuardian:!value});
	   var paper=value==true ? "NYT" : "Guardian";
	   console.log("Current Paper",value==true ? "NYT" : "Guardian" );
	   console.log("Current Selection"+this.state.currentSelection); // World
	   var routeTo="/Body/"+paper+"/"+this.state.currentSelection;
	   //Write the redirect
	   //eslint-disable-next-line
	   console.log("This is inside handleClick")
	   console.log(this)
	   this.props.history.push(routeTo)
	   
	   
	   //console.log("isGuardian "+this.state.isGuardian);
	}
	displayBookMarks(){
		this.props.history.push("/bfav")
	}
	changeSelection(value){
		console.log("value received"+value)
		this.setState({currentSelection: value})
		console.log("Header Current Selection"+this.state.currentSelection)
		var gua=this.state.isGuardian==true ? "Guardian" : "NYT"
		var routeTo="/Body/"+gua+"/"+value
		console.log("Routing to"+routeTo)
		console.log(this)
	}
	render(){
		console.log("Header render")
		console.log(this.props)
	return (
	
	<Navbar className="color-nav" collapseOnSelect expand="lg" >
	
	<Nav>
	<div style={{'width':'200px'}}>
	<SearchBox2/>
	</div>
	</Nav>
	<Navbar.Toggle aria-controls="basic-navbar-nav" />
	 <Navbar.Collapse id="responsive-navbar-nav">
	     <Nav className="mr-auto">
		 <Nav>
			<div style={{'marginLeft':'10px','padding':'0px','marginTop':'15px'}}>
			<Home type={this.state.isGuardian} onPress={this.changeSelection} selection={this.state.currentSelection}/>
			</div>
		</Nav>
		<Nav>
			<div style={{'marginLeft':'10px','padding':'0px','marginTop':'15px'}}>
			<World type={this.state.isGuardian} onPress={this.changeSelection} selection={this.state.currentSelection}/>
			</div>
		</Nav>
		<Nav>
			<div style={{'marginLeft':'10px','padding':'0px','marginTop':'15px'}}>
			<Politics type={this.state.isGuardian} onPress={this.changeSelection} selection={this.state.currentSelection}/>
			</div>
		</Nav>
		<Nav>
			<div style={{'marginLeft':'10px','padding':'0px','marginTop':'15px'}}>
			<Business type={this.state.isGuardian} onPress={this.changeSelection} selection={this.state.currentSelection}/>
			</div>
		</Nav>
		<Nav>
			<div style={{'marginLeft':'10px','padding':'0px','marginTop':'15px'}}>
			<Technology type={this.state.isGuardian} onPress={this.changeSelection} selection={this.state.currentSelection}/>
			</div>
		</Nav>
		<Nav>
			<div style={{'marginLeft':'10px','padding':'0px','marginTop':'15px'}}>
			<Sports type={this.state.isGuardian} onPress={this.changeSelection} selection={this.state.currentSelection}/>
			</div>
		</Nav>
		</Nav>
		
		
		<Nav>
		   <Nav>
		   <div className="headerBookMark" onClick={this.displayBookMarks}  data-tip="Bookmark" ><FaRegBookmark/></div>
		   <ReactTooltip effect="solid" place="bottom"/>
		   </Nav>
		   <Nav>
		  <div className="headerBookMarkMarked" ><FaBookmark/></div>
		   </Nav>
		   <Nav>
		   <div className="headersspan"> NYTimes </div>
		   </Nav>
		   <Nav>
		   <div className="toggleDIV" >
		   <SwitchExample onToggle={this.handleClick}/>
		   </div>
		   </Nav>
		   <Nav>
		   <div className="headersspan"> Guardian </div>
		   </Nav>
		</Nav>
    </Navbar.Collapse>
    </Navbar>
	);
	}
}

const Header2= withRouter(Header)
class Details extends React.Component{
  constructor(){
	  super();
	  this.state={
		  url: "",
		  didReceive: false,
		  type: "",
		  data: ""
	  }
	  this.myRef = React.createRef();
	  this.setChange=this.setChange.bind(this);
	  this.refresh=this.refresh.bind(this)
	  this.handleExpand=this.handleExpand.bind(this)
	  this.saveToStorage=this.saveToStorage.bind(this)
	  this.removeFromStorage=this.removeFromStorage.bind(this)
	  this.notify=this.notify.bind(this)
	  this.notifyRemove=this.notifyRemove.bind(this)
  }
  refresh(){
		console.log("Refresh Called:")
		this.setState({didReceive:false})
	}
  setChange(title, ty){
	  this.setState({
		  url:title,
		  type: ty})
  }
  makeDate(passedDate)
  {
	  var today = new Date(passedDate);
		var dd = today.getDate();
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
        var sp='-';
		if(dd<10) dd='0'+dd;
		if(mm<10) mm='0'+mm;
		
		var curDate=(yyyy+sp+mm+sp+dd);
		return curDate;
  }
  notify(){
	  const tStyle={
		display:"block",
		color:"black"
	}
	var tit=""
	if(this.state.type=="n")
     {
		 tit="Saving "+ this.state.data.response.docs[0].headline.main;
	 }else{
	  tit="Saving "+ this.state.data.response.content.webTitle;
	 }
	  //toast(<ToastBoxthis.state.data.response.content.webTitle); // Change for NYT
      toast(({ closeToast }) => <div style={tStyle}>{tit}</div>);
  }
  notifyRemove(){
	  const tStyle={
		display:"block",
		color:"black"
	}
	var tit=""
	if(this.state.type=="n")
     {
		 tit="Removing " +this.state.data.response.docs[0].headline.main;
	 }else{
		 tit="Removing " +this.state.data.response.content.webTitle;
	 }
	  
	  //toast(<ToastBoxthis.state.data.response.content.webTitle); // Change for NYT
      toast(({ closeToast }) => <div style={tStyle}>{tit}</div>);
  }
   scroll(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }
  handleExpand(){
	  document.getElementsByClassName("summaryArticle")[0].style.webkitLineClamp=100
	  document.getElementsByClassName("showMoreAngle")[0].style.display="none"
	  document.getElementsByClassName("showLessAngle")[0].style.display="block"
	  this.scroll(this.myRef)
  }
  handleCollapse(){
	  document.getElementsByClassName("summaryArticle")[0].style.webkitLineClamp=6
	  document.getElementsByClassName("showMoreAngle")[0].style.display="block"
	  document.getElementsByClassName("showLessAngle")[0].style.display="none"
  }
  saveToStorage(){
	  document.getElementsByClassName("nMarked")[0].style.display="none"
	  document.getElementsByClassName("yMarked")[0].style.display="block"
	  var prev=JSON.parse(localStorage.getItem("BookMarkCards"))
	  console.log("Current State")
	  console.log(this.state)
	  
	  
	  
	  var curEle={}
	  if(this.state.type=="n")
     {
			
		var imsrc="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
		if(this.state.data.response.docs[0].multimedia.length !=0)
		{
			var szlen=this.state.data.response.docs[0].multimedia.length
			for(var k=0;k<szlen;k++)
			{
				if(this.state.data.response.docs[0].multimedia[k].width>=2000)
				{
					imsrc="https://www.nytimes.com/"+this.state.data.response.docs[0].multimedia[k].url
					break;
				}
			}
			//imsrc="https://www.nytimes.com/"+this.state.data.response.docs[0].multimedia[0].url
		}
		 curEle={
			  keys: this.state.data.response.docs[0].web_url,
			  key: this.state.data.response.docs[0].web_url,
			  WebURL: this.state.data.response.docs[0].web_url,
			  type: this.state.type,
			  ImageURL: imsrc,
			  Title: this.state.data.response.docs[0].headline.main,
			  Section: this.state.data.response.docs[0].section_name,
			  Dates: this.state.data.response.docs[0].pub_date,
			  Description: this.state.data.response.docs[0].abstract
		  }
	 }else{
		 var defGuarURL="https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
				var GCardsIMGSCR=defGuarURL
				
					if(  this.state.data.response.content.blocks.main == undefined|| this.state.data.response.content.blocks.main.elements ==undefined||  this.state.data.response.content.blocks.main.elements.length==0 || this.state.data.response.content.blocks.main.elements[0].assets.length == 0)
					{
					}else{
						GCardsIMGSCR=this.state.data.response.content.blocks.main.elements[0].assets[this.state.data.response.content.blocks.main.elements[0].assets.length-1].file;
					}
	  curEle={
			  keys: this.state.data.response.content.id,
			  key: this.state.data.response.content.webUrl,
			  WebURL: this.state.data.response.content.webUrl,
			  type: this.state.type,
			  ImageURL: GCardsIMGSCR,
			  Title: this.state.data.response.content.webTitle,
			  Section: this.state.data.response.content.sectionName,
			  Dates: this.state.data.response.content.webPublicationDate,
			  Description: this.state.data.response.content.blocks.body[0].bodyTextSummary
		  }
	 }	  
	  var favCards=[]
	  if(prev==null || prev.length==0)
	  {
		  favCards.push(curEle)
	  }else{
		favCards=prev
        favCards.push(curEle)
        localStorage.removeItem("BookMarkCards")		
	  }
	  localStorage.setItem("BookMarkCards",JSON.stringify(favCards));
	  this.notify()
  }
  removeFromStorage(){
   document.getElementsByClassName("nMarked")[0].style.display="block"
   document.getElementsByClassName("yMarked")[0].style.display="none"
   var prev=JSON.parse(localStorage.getItem("BookMarkCards"))
   var len=prev.length
   var theIndex=-1
   
   if(this.state.type=="n")
   {
   
   for(var i=0;i<len;i++)
   {
	   if(prev[i].keys == (this.state.data.response.docs[0].web_url))
	   {
		   theIndex=i;
		   break;
	   }
   }
   }else{
	   
	   for(var i=0;i<len;i++)
	   {
		   if(prev[i].keys == (this.state.data.response.content.id))
		   {
			   theIndex=i;
			   break;
		   }
	   }
   
   }
   prev.splice(theIndex,1)
   localStorage.removeItem("BookMarkCards")
   localStorage.setItem("BookMarkCards",JSON.stringify(prev));
   this.notifyRemove()
  }
  componentDidMount(){
  this.refresh()
  console.log("Details Called")
  console.log(this.props.match)
  console.log(this.props.match.params.Tit)
  var actualTit=this.props.match.params.Tit.replace(/987654321/g,"/")
  this.setChange(actualTit, this.props.match.params.Type);
  var pap=""
  if(this.props.match.params.Type=="n")
  {
	  pap+="NYT"
	  
  }else{
	  pap+="Guardian"
  }
 pap+="?site="
 pap+=actualTit
 
 console.log("Typw of request")
 console.log(pap)

  fetch("https://nodeanamayproject.wn.r.appspot.com/getDetailedArticles/"+pap)
		.then(response=>response.json())
		.then(dataset=> {
			this.setState({
			data:dataset,
			didReceive:true
		})
		})
		console.log("Set Did Recieve true");
  }
	
  render(){
	  console.log("Called Details")
	  localStorage.removeItem("notDisplay")
	  localStorage.setItem("notDisplay","true")
	  if(document.getElementsByClassName("HomeTab")[0]!=null &&
	document.getElementsByClassName("WorldTab")[0]!=null &&
	document.getElementsByClassName("PoliticsTab")[0]!=null &&
	document.getElementsByClassName("BusinessTab")[0]!=null &&
	document.getElementsByClassName("TechnologyTab")[0]!=null &&
	document.getElementsByClassName("SportsTab")[0]!=null)
	{
	document.getElementsByClassName("HomeTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("WorldTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("PoliticsTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("BusinessTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("TechnologyTab")[0].style.color="#A0A0A0";
	document.getElementsByClassName("SportsTab")[0].style.color="#A0A0A0";
	} 
	  
	  if(document.getElementsByClassName("headersspan")[0]!=null && document.getElementsByClassName("headersspan")[1]!=null &&
	  document.getElementsByClassName("toggleDIV")[0] !=null && document.getElementsByClassName("headerBookMark")[0]!=null &&
	  document.getElementsByClassName("headerBookMarkMarked")[0] !=null)
	  {
	  document.getElementsByClassName("headersspan")[0].style.display="none"
	  document.getElementsByClassName("toggleDIV")[0].style.display="none"
	  document.getElementsByClassName("headersspan")[1].style.display="none"
	  document.getElementsByClassName("headerBookMark")[0].style.display="block"
	  document.getElementsByClassName("headerBookMarkMarked")[0].style.display="none"
	  }
	 
	   const mystyleArticle = {
       'WebkitLineClamp': 6
    };
	const mystyleMore = {
       display: "block"
    };
	const mystyleLess = {
       display: "none"
    };
	
	
	
	var bookMarked={
		display:"none",
		fontSize:30,
		color:"red",
		margin:0,
		padding:0
	}
	var notMarked={
		display:"block",
		fontSize:30,
		color:"red",
		margin:0,
		padding:0
	}
	
	
	  var isGuardian= (this.state.type=="g") ? true: false
	  if(this.state.didReceive){
		  
		if(isGuardian==true){  
		console.log("Logging for DDDATE")
	      console.log(this.state.data)
		  console.log(this.state.data.response.content.webURl)
		  var prev=JSON.parse(localStorage.getItem("BookMarkCards"))
			if(prev==null || prev.length==0)
			{
				
			}else{
		   var len=prev.length
		   var theIndex=-1
		   console.log("Logging Satetetette")
		   console.log(this.state)
		   for(var i=0;i<len;i++)
		   {
			   if(prev[i].keys == (this.state.data.response.content.id))
			   {
				   theIndex=i;
				   break;
			   }
		   }
			 if(theIndex==-1)
			 {
			 }else{
				 bookMarked.display="block"
				 notMarked.display="none"
			 }
			}
			
			
				var defGuarURL="https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
				var GCardsIMGSCR=defGuarURL
				
					if(this.state.data.response.content.blocks.main == undefined|| this.state.data.response.content.blocks.main.elements ==undefined||this.state.data.response.content.blocks.main.elements.length==0 || this.state.data.response.content.blocks.main.elements[0].assets.length == 0)
					{
					}else{
						GCardsIMGSCR=this.state.data.response.content.blocks.main.elements[0].assets[this.state.data.response.content.blocks.main.elements[0].assets.length-1].file;
					}
	  return (
		  <div className="detailsBor">
		  <div className="upperPartDetailedSection">
		  
		  <div className="upperPartTitle">{this.state.data.response.content.webTitle} </div>
		  
		  <div> 
		       <div className="dateDetailed">
			   {this.makeDate(this.state.data.response.content.webPublicationDate)}
			   </div>
			   <div className="bookMarkIcons">
						<div className="DetailsIcons">
							  <div className="FacebookDetails" data-tip="Facebook" data-for="first-click">
							  <FacebookShareButton url={this.state.data.response.content.webUrl} hashtag={"#CSCI_571_NewsApp"} >
							   <FacebookIcon size={30} round={true}/>
							  </FacebookShareButton>
							  </div>
							  <ReactTooltip place="top" effect="solid" id="first-click"/>
							  <div className="TwitterDetails" data-tip="Twitter" data-for="first-click">
							  <TwitterShareButton url={this.state.data.response.content.webUrl} hashtags={["CSCI_571_NewsApp"]}>
							   <TwitterIcon size={30} round={true}/>
							  </TwitterShareButton>
							  </div>
							  <div className="EmailDetails" data-tip="Email" data-for="first-click">
							  <EmailShareButton url={this.state.data.response.content.webUrl} subject={"CSCI_571_NewsApp"}>
							   <EmailIcon size={30} round={true}/>
							  </EmailShareButton>
							  </div>
						 </div>
						<div className="bookMarkDetails" data-tip="Bookmark" data-for="first-click">
							<div className="nMarked" style={notMarked} onClick={this.saveToStorage}>
							<FaRegBookmark style={{'verticalAlign':'top'}}/>
							</div>
							
							<div className="yMarked" data-tip="Bookmark" style={bookMarked} onClick={this.removeFromStorage}>
							<FaBookmark style={{'verticalAlign':'top'}}/>
							</div>
						</div>
				</div>
		  </div>
		  
		  <div className="IMGSection">
		  <img src={GCardsIMGSCR} />
		  </div>
		  
		  <div ref={this.myRef} className="summaryArticle" style={mystyleArticle}> {this.state.data.response.content.blocks.body[0].bodyTextSummary} </div>
		   <div className="aRight">
                 			  <div className="TwoChoices"> 
			  <div className="showMoreAngle" style={mystyleMore} onClick={this.handleExpand}> <FaChevronDown/> </div>
			  <div className="showLessAngle" style={mystyleLess} onClick={this.handleCollapse}> <FaChevronUp/>  </div>
		      </div>
		  </div>
		  
		  </div>
		  <div className="commentDetailed"><PageWithComments/></div>
		  </div> 
	  )
		}else{
			console.log("Logging for DDDATE")
	      console.log(this.state.data)
		  //console.log(this.state.data.response.content.webURl)
				  var prev=JSON.parse(localStorage.getItem("BookMarkCards"))
					if(prev==null || prev.length==0)
					{
						
					}else{
				   var len=prev.length
				   var theIndex=-1
				   console.log("Logging Satetetette")
				   console.log(this.state)
				   for(var i=0;i<len;i++)
				   {
					   if(prev[i].keys == (this.state.data.response.docs[0].web_url))
					   {
						   theIndex=i;
						   break;
					   }
				   }
					 if(theIndex==-1)
					 {
					 }else{
						 bookMarked.display="block"
						 notMarked.display="none"
					 }
					}
		var imsrc="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
		if(this.state.data.response.docs[0].multimedia.length !=0)
		{
			var szlen=this.state.data.response.docs[0].multimedia.length
			for(var k=0;k<szlen;k++)
			{
				if(this.state.data.response.docs[0].multimedia[k].width>=2000)
				{
					imsrc="https://www.nytimes.com/"+this.state.data.response.docs[0].multimedia[k].url
					break;
				}
			}
			//imsrc="https://www.nytimes.com/"+this.state.data.response.docs[0].multimedia[0].url
		}
		var altimg="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
		return (
		  <div className="detailsBor">
		  <div className="upperPartDetailedSection">
		  
		  <div className="upperPartTitle">{this.state.data.response.docs[0].headline.main} </div>
		  
		  <div> 
		       <div className="dateDetailed">
			   {this.makeDate(this.state.data.response.docs[0].pub_date)}
			   </div>
			   <div className="bookMarkIcons">
						<div className="DetailsIcons">
							  <div className="FacebookDetails" data-tip="Facebook" data-for="first-click">
							  <FacebookShareButton url={this.state.data.response.docs[0].web_url} hashtag={"#CSCI_571_NewsApp"} >
							   <FacebookIcon size={30} round={true}/>
							  </FacebookShareButton>
							  </div>
							  <ReactTooltip place="top" effect="solid" id="first-click"/>
							  <div className="TwitterDetails" data-tip="Twitter" data-for="first-click">
							  <TwitterShareButton url={this.state.data.response.docs[0].web_url} hashtags={["CSCI_571_NewsApp"]}>
							   <TwitterIcon size={30} round={true}/>
							  </TwitterShareButton>
							  </div>
							  <div className="EmailDetails" data-tip="Email" data-for="first-click">
							  <EmailShareButton url={this.state.data.response.docs[0].web_url} subject={"CSCI_571_NewsApp"}>
							   <EmailIcon size={30} round={true}/>
							  </EmailShareButton>
							  </div>
						 </div>
						<div className="bookMarkDetails" data-tip="Bookmark" data-for="first-click">
							<div className="nMarked" style={notMarked} onClick={this.saveToStorage}>
							<FaRegBookmark style={{'verticalAlign':'top'}}/>
							</div>
							
							<div className="yMarked" data-tip="Bookmark" style={bookMarked} onClick={this.removeFromStorage}>
							<FaBookmark style={{'verticalAlign':'top'}}/>
							</div>
						</div>
				</div>
		  </div>
		  
		  <div className="IMGSection">
		  <img src={imsrc} alt={altimg}/>
		  </div>
		  
		  <div ref={this.myRef} className="summaryArticle" style={mystyleArticle}> {this.state.data.response.docs[0].abstract} </div>
		   <div className="aRight">
                 			  <div className="TwoChoices"> 
			  <div className="showMoreAngle" style={mystyleMore} onClick={this.handleExpand}> <FaChevronDown/> </div>
			  <div className="showLessAngle" style={mystyleLess} onClick={this.handleCollapse}> <FaChevronUp/>  </div>
		      </div>
		  </div>
		  
		  </div>
		  <div className="commentDetailed"><PageWithComments/></div>
		  </div> )
		}
	  }
	  else{
		  return (<Spinner/>)
	  }
  }
}
 
class App extends React.Component{
  constructor(){
	  super()
	  toast.configure({
	position: "top-center",
	autoClose: 2000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true
  //etc you get the idea
});
	  
  }
  
  
  render(){
	  console.log("History")
	  console.log(this.props)
	  return (
	  <div>
	  <Header2/>
	   <Switch>
	   
	      <Route path="/" component={Body} exact />
		  <Route path="/Body/:paper/:section" component={Body} exact />
		  <Route path="/about" component={About} />
		  <Route path="/Home" component={Home} />
		  <Route path="/details/:Tit/:Type" component={Details} />
		  <Route path="/spin" component={Spinner}/>
		  <Route path="/spinN" component={SpinnerNoRefresh}/>
		  <Route path="/bsearch" component={BodySearch}/>
		  <Route path="/bfav" component={BodySearchFavourite}/>
		  <Route path="/err" component={Error} />
	   
	   </Switch>
	  <ToastContainer
       transition={Zoom} 
	   position="top-center"
	   hideProgressBar
	   autoClose={2000}
	   />
	  </div>
	  )
  }
}

class Modal extends React.Component{
	
  constructor(){
	  super()
  }
  render(){
	  console.log("Logging Modal")
	  console.log(this.props)
	  //console.log("100::"+ this.props.webURl)
	  var ids="myModal"
	  var pq=this.props.Title
		var lenpq=pq.length
		for(var i=0;i<lenpq;i++)
		{
			if(pq[i]>='a' && pq[i]<='z')
			{
				ids+=pq[i]
			}
		}
	  console.log("INMODALALLA")
	  console.log(ids)
	  return (
	  <div className="container"> 
		  <div className="modal fade" id={ids} role="dialog">
			<div className="modal-dialog">
			
			  
			  <div className="modal-content">
				<div className="modal-header">
				<h4 className="modal-title">{this.props.Title}</h4>
				  <button type="button" className="close" data-dismiss="modal">&times;</button>
				  
				</div>
				<div className="modal-body">
				<div className="Sharevia">
				 <p>Share via</p>
				</div>
				<MediaQuery minWidth={768}>
				 <div className="Icons">
				   <div className="Facebook">
				  <FacebookShareButton url={this.props.webURl} hashtag={"#CSCI_571_NewsApp"} >
				   <FacebookIcon size={60} round={true}/>
				  </FacebookShareButton>
				  </div>
				  <div className="Twitter">
				  <TwitterShareButton url={this.props.webURl} hashtags={["CSCI_571_NewsApp"]}>
				   <TwitterIcon size={60} round={true}/>
				  </TwitterShareButton>
				  </div>
				  <div className="Email">
				  <EmailShareButton url={this.props.webURl} subject={"#CSCI_571_NewsApp"}>
				   <EmailIcon size={60} round={true}/>
				  </EmailShareButton>
				  </div>
				 </div>
				 </MediaQuery>
				 <MediaQuery maxWidth={768}>
				 <div className="IconsM">
				   <div className="FacebookM">
				  <FacebookShareButton url={this.props.webURl} hashtag={"#CSCI_571_NewsApp"} >
				   <FacebookIcon size={60} round={true}/>
				  </FacebookShareButton>
				  </div>
				  <div className="TwitterM">
				  <TwitterShareButton url={this.props.webURl} hashtags={["CSCI_571_NewsApp"]}>
				   <TwitterIcon size={60} round={true}/>
				  </TwitterShareButton>
				  </div>
				  <div className="EmailM">
				  <EmailShareButton url={this.props.webURl} subject={"#CSCI_571_NewsApp"}>
				   <EmailIcon size={60} round={true}/>
				  </EmailShareButton>
				  </div>
				 </div>
				 </MediaQuery>
				</div>
			  </div>
			  
			</div>
		  </div>
		  
		</div>
	  )
  }
}
class SmallCard extends React.Component{
	constructor()
	{
		super();
		this.handleClick=this.handleClick.bind(this)
		
	}
	handleClick(e)
	{
		 e.preventDefault()
	}
	render(){
		var today = new Date(this.props.Dates);
		var dd = today.getDate();
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
        var sp='-';
		if(dd<10) dd='0'+dd;
		if(mm<10) mm='0'+mm;
		
		var curDate=(yyyy+sp+mm+sp+dd);
		var Sec=""
		//console.log(curDate);
		var backGround=""
		var colorC="white"
		if(this.props.Section.toLowerCase()=="world"){
			backGround="#9534eb"
			Sec=this.props.Section.toUpperCase()
		}else if(this.props.Section.toLowerCase()=="politics"){
		    backGround="#1aad5f"
			Sec=this.props.Section.toUpperCase()
		}else if(this.props.Section.toLowerCase()=="business"){
            backGround="#16abe0"	
			Sec=this.props.Section.toUpperCase()		
		}else if(this.props.Section.toLowerCase()=="technology"){
			backGround="#dede14"
			Sec=this.props.Section.toUpperCase()
            colorC="black"			
		}else if(this.props.Section.toLowerCase()=="sport" || this.props.Section.toLowerCase()=="sports" ){
			backGround="#f5c20c"
			Sec=this.props.Section.toUpperCase()
			colorC="black"
		}else{
			backGround="#85816e"
			Sec=(this.props.Section).toUpperCase();
		}
		Sec=Sec.toUpperCase();
		//console.log(this.props.Section)
		//console.log(this.props.WebURL)
		var prev=this.props.keys
		prev=prev.replace(/\//g,"987654321")
		var ti="/details/"+prev+"/"+this.props.type
		console.log(this.props.keys)
		
		var ids="#myModal"
		
		var pq=this.props.Title
		var lenpq=pq.length
		for(var i=0;i<lenpq;i++)
		{
			if(pq[i]>='a' && pq[i]<='z')
			{
				ids+=pq[i]
			}
		}
		
		console.log("IIIDDDSS")
		console.log(ids)
		console.log("Small Cards")
		console.log(this.props)
		return(
		//
		<StyledLink to={ti} >
		<MediaQuery minWidth={768}>
         <div className="smallcardHome" style={{'color':'black'}}>
			 <div className="smallcardTitle">
			 
			 {this.props.Title}
			 
				 <div className="noMargin" data-toggle="modal" data-target={ids} onClick={this.handleClick}>
				 <MdShare/>
				 </div>
			 
			 </div>
		 <div className="smallcardImage">
			<img src={this.props.ImageURL}/>
			<Modal webURl={this.props.WebURL} Title={this.props.Title}/>
		 </div>
		<div className="smallcardLower">
		 
			 <div className="smallcardDate">
			 {curDate}
			 </div>
			 <div className="smallcardSection" style={{backgroundColor:backGround,color:colorC }}>
				 {Sec}
			 </div>
		</div>
	 </div>
	 </MediaQuery>
	 <MediaQuery maxWidth={768}>
         <div className="smallcardHomeM" style={{'color':'black'}}>
			 <div className="smallcardTitleM">
			 
			 {this.props.Title}
			 
				 <div className="noMargin" data-toggle="modal" data-target={ids} onClick={this.handleClick}>
				 <MdShare/>
				 </div>
			 
			 </div>
		 <div className="smallcardImageM">
			<img src={this.props.ImageURL}/>
			<Modal webURl={this.props.WebURL} Title={this.props.Title}/>
		 </div>
		<div className="smallcardLowerM">
		 
			 <div className="smallcardDateM">
			 {curDate}
			 </div>
			 <div className="smallcardSectionM" style={{backgroundColor:backGround,color:colorC }}>
				 {Sec}
			 </div>
		</div>
	 </div>
	 </MediaQuery>
	 </StyledLink>
		)
	}
}


class SmallCardFavourite2 extends React.Component{
	constructor()
	{
		super();
		this.handleClick=this.handleClick.bind(this)
		this.removeCurItem=this.removeCurItem.bind(this)
		this.notifyRemove=this.notifyRemove.bind(this)
	}
	handleClick(e)
	{
		 e.preventDefault()
	}
	notifyRemove(){
	  const tStyle={
		display:"block",
		color:"black"
	}
	  var tit="Removing " +this.props.Title;
	  //toast(<ToastBoxthis.state.data.response.content.webTitle); // Change for NYT
      toast(({ closeToast }) => <div style={tStyle}>{tit}</div>);
    }
	removeCurItem(e){
		e.preventDefault()
		var prev=JSON.parse(localStorage.getItem("BookMarkCards"))
	   var len=prev.length
	   var theIndex=-1
	   for(var i=0;i<len;i++)
	   {
		   if(prev[i].keys == (this.props.keys))
		   {
			   theIndex=i;
			   break;
		   }
	   }
	   prev.splice(theIndex,1)
	   localStorage.removeItem("BookMarkCards")
	   localStorage.setItem("BookMarkCards",JSON.stringify(prev));
	   this.notifyRemove();
	   this.props.history.push("/bfav")
	}
	render(){
		var today = new Date(this.props.Dates);
		var dd = today.getDate();
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
        var sp='-';
		if(dd<10) dd='0'+dd;
		if(mm<10) mm='0'+mm;
		
		var curDate=(yyyy+sp+mm+sp+dd);
		var Sec=""
		var colorC="white"
		//console.log(curDate);
		var backGround=""
		if(this.props.Section.toLowerCase()=="world"){
			backGround="#9534eb"
			Sec=this.props.Section.toUpperCase()
		}else if(this.props.Section.toLowerCase()=="politics"){
		    backGround="#1aad5f"
			Sec=this.props.Section.toUpperCase()
		}else if(this.props.Section.toLowerCase()=="business"){
            backGround="#16abe0"	
			Sec=this.props.Section.toUpperCase()		
		}else if(this.props.Section.toLowerCase()=="technology"){
			backGround="#dede14"
			Sec=this.props.Section.toUpperCase()
            colorC="black"			
		}else if(this.props.Section.toLowerCase()=="sport" || this.props.Section.toLowerCase()=="sports" ){
			backGround="#f5c20c"
			Sec=this.props.Section.toUpperCase()
			colorC="black"
		}else{
			backGround="#85816e"
			Sec=(this.props.Section).toUpperCase();
		}
		Sec=Sec.toUpperCase();
		//console.log(this.props.Section)
		//console.log(this.props.WebURL)
		
		console.log("Incoming Web URL in Favourite Cards")
		console.log(this.props)
		
		var prev=this.props.keys
		prev=prev.replace(/\//g,"987654321")
		var ti="/details/"+prev+"/"+this.props.type
		console.log(this.props.keys)
		
		var ids="#myModal"
		
		var pq=this.props.Title
		var lenpq=pq.length
		for(var i=0;i<lenpq;i++)
		{
			if(pq[i]>='a' && pq[i]<='z')
			{
				ids+=pq[i]
			}
		}
		
		console.log("IIIDDDSS")
		console.log(ids)
		console.log("Small Cards")
		console.log(this.props)
		
		var sty={
			float:'right',
			textAlign:'center',
			marginRight:'19px',
			color:'white',
			padding:'5px',
			fontSize: '12px',
			fontWeight:'bold',
			borderRadius: '4px 4px 4px 4px'
		}
		var paperName=this.props.type=="n" ? "NYTIMES" : "GUARDIAN";
		if(this.props.type=="n")
		{
			sty.backgroundColor='#DCDCDC'
			sty.color='black'
		}else{
			sty.backgroundColor='#232242'
			sty.color='white'
		}
		return(
		//
		<StyledLink to={ti} >
		<MediaQuery minWidth={768}>
         <div className="smallcardHome" style={{'color':'black'}}>
			 <div className="smallcardTitle">
			 
			 <div className="fitem">
			     {this.props.Title}
				 <div className="noMargin" data-toggle="modal" data-target={ids} onClick={this.handleClick} style={{'display':'inline-block'}}>
				 <MdShare/>
				 </div>
			     <div style={{'display':'inline-block'}} onClick={this.removeCurItem}>
				 <MdDelete/>
				 </div>
				 </div>
			 </div>
		 <div className="smallcardImage">
			<img src={this.props.ImageURL}/>
			<Modal webURl={this.props.WebURL} Title={this.props.Title}/>
		 </div>
		<div className="smallcardLower">
		 
			 <div className="smallcardDate">
			 {curDate}
			 </div>
			 
			 <div className="favCardPaper" style={sty}>
				 {paperName}
			 </div>
			 <div className="smallcardSection" style={{backgroundColor:backGround,color:colorC}}>
				 {Sec}
			 </div>
		</div>
	 </div>
	 </MediaQuery>
	 <MediaQuery maxWidth={768}>
         <div className="smallcardHomeM" style={{'color':'black'}}>
			 <div className="smallcardTitleM">
			 
			 <div className="fitem">
			     {this.props.Title}
				 <div className="noMargin" data-toggle="modal" data-target={ids} onClick={this.handleClick} style={{'display':'inline-block'}}>
				 <MdShare/>
				 </div>
			     <div style={{'display':'inline-block'}} onClick={this.removeCurItem}>
				 <MdDelete/>
				 </div>
				 </div>
			 </div>
		 <div className="smallcardImageM">
			<img src={this.props.ImageURL}/>
			<Modal webURl={this.props.WebURL} Title={this.props.Title}/>
		 </div>
		<div className="smallcardLowerM">
		 
			 <div className="smallcardDateM">
			 {curDate}
			 </div>
			 
			 <div className="favCardPaper" style={sty}>
				 {paperName}
			 </div>
			 <div className="smallcardSectionM" style={{backgroundColor:backGround,color:colorC}}>
				 {Sec}
			 </div>
		</div>
	 </div>
	 </MediaQuery>
	 </StyledLink>
		)
	}
}
const SmallCardFavourite = withRouter(SmallCardFavourite2)
class Card extends React.Component{
	constructor()
	{
		super();
		this.handleClick=this.handleClick.bind(this)
		
	}
	
	handleClick(e)
	{		
		 e.preventDefault()
		 
	}
	render(){
		var today = new Date(this.props.Dates);
		var dd = today.getDate();
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
        var sp='-';
		if(dd<10) dd='0'+dd;
		if(mm<10) mm='0'+mm;
		
		var curDate=(yyyy+sp+mm+sp+dd);
		var Sec=""
		var colorC="white"
		//console.log(curDate);
		var backGround=""
		if(this.props.Section =="world"){
			backGround="#9534eb"
			Sec="WORLD"
		}else if(this.props.Section=="politics"){
		    backGround="#1aad5f"
			Sec="POLITICS"
		}else if(this.props.Section=="business"){
            backGround="#16abe0"	
			Sec=(this.props.Section).toUpperCase();		
		}else if(this.props.Section=="technology"){
			backGround="#dede14"
			Sec=(this.props.Section);
            colorC="black"			
		}else if(this.props.Section=="sport"|| this.props.Section=="sports"){
			backGround="#f5c20c"
			Sec="SPORTS"
			colorC="black"
		}else{
			backGround="#85816e"
			Sec=(this.props.Section).toUpperCase();
			
		}
		Sec=Sec.toUpperCase();
		//console.log(this.props.Section)
		//console.log(this.props.WebURL)
		
		console.log("Incoming Web URL in Cards")
		console.log(this.props)
		var prev=this.props.keys
		prev=prev.replace(/\//g,"987654321")
		var ti="/details/"+prev+"/"+this.props.type
		console.log(this.props.keys)
		var ids="#myModal"
		
		var pq=this.props.Title
		var lenpq=pq.length
		for(var i=0;i<lenpq;i++)
		{
			if(pq[i]>='a' && pq[i]<='z')
			{
				ids+=pq[i]
			}
		}
		
		console.log("IIIDDDSS")
		console.log(ids)
		
		return(
		//
		<Link to={ti}>
		<MediaQuery minWidth={768}>
         <div className="cardHome" style={{'color':'black'}}>
		 <div className="cardImage">
			<img src={this.props.ImageURL}/>
		 </div>
		 <div className="cardContent">
		 <div className="cardTitle" >
		 
		 {this.props.Title}
		 
		 <div className="noMargin" data-toggle="modal" data-target={ids} onClick={this.handleClick}>
		  
		 <MdShare/>
		 </div>
		 
		 </div>
		 
		 <div className="cardDesc">
		 {this.props.Description}
		
		<Modal webURl={this.props.WebURL} Title={this.props.Title}/>
		 </div>
		 
		 <div className="cardLower">
		 
		 <div className="cardDate">
		 {curDate}
		 </div>
		 <div className="cardSection" style={{backgroundColor:backGround,color:colorC}}>
			 {Sec}
		 </div>
		 </div>
		 </div>
	 </div>
		</MediaQuery>
		<MediaQuery maxWidth={768}> 
		<div className="smallcardHomeMC">
		<div className="smallcardImageMC">
			<img src={this.props.ImageURL}/>
		 </div>
			 <div className="smallcardTitleMC">
			 
			 {this.props.Title}
			 
				 <div className="noMargin" data-toggle="modal" data-target={ids} onClick={this.handleClick}>
				 <MdShare/>
				 </div>
			 <Modal webURl={this.props.WebURL} Title={this.props.Title}/>
			 </div>
		     <div className="cardDescMC">
		 {this.props.Description}
		 </div>
		<div className="smallcardLowerMC">
		 
			 <div className="smallcardDateMC">
			 {curDate}
			 </div>
			 <div className="smallcardSectionMC" style={{backgroundColor:backGround,color:colorC}}>
				 {Sec}
			 </div>
		</div>
	 </div>
	 </MediaQuery>
	 </Link>
		)
	}
}

//Adding Sections cards Tab
class BodyCardsTab extends React.Component{
	constructor(){
		super()
		this.state={
			name:"Anamay",
			counter: 0,
			data:{},
			didReceive: false
		}
		this.refresh=this.refresh.bind(this)
	}
	refresh(){
		console.log("Refresh Called:")
		this.setState({didReceive:false})
	}
	componentDidMount(){
		this.refresh()
		console.log("Called Body Card Did Mount")
		var pap=this.props.paper
		var sec=this.props.section
		fetch("https://nodeanamayproject.wn.r.appspot.com/getCardsSection/"+pap+"/"+sec)
		.then(response=>response.json())
		.then(dataset=> {
			this.setState({
			data:dataset,
			didReceive:true
		})
		})
		console.log("Set Did Recieve true");
	}
	
	
	
	
	
	componentWillReceiveProps(nextProps){
		//this.refresh()
	 console.log("Called Will Recieve props:");
		console.log(this.state.didReceive);
		console.log(this)
		 if (nextProps.paper !== this.props.paper || nextProps.section!==this.props.section) {
		console.log('pokemons state has changed.')
		console.log("Next props")
		console.log(nextProps)
		console.log("This props")
		console.log(this.props)
		this.refresh()
		var pap=this.props.paper
		console.log("HHHHHpapapapapapap"+pap)
		fetch("https://nodeanamayproject.wn.r.appspot.com/getCardsSection/"+nextProps.paper+"/"+nextProps.section)
		.then(response=>response.json())
		.then(dataset=> {
			this.setState({
			data:dataset,
			didReceive:true
		})
		})
	  }
		}
	
	
	
    render(){
		console.log("Called Body Card");
		var pap=this.props.paper;
		console.log(pap)
		//const cardsToPass=this.state.data.response.results.map( card =>{ <Card key={card.id} Title={card.webTitle} Image={card.blocks.main.elements[0].assets[0].file} />
		console.log("Called render: "+ this.state.didReceive)
		
		if(this.state.didReceive){
			//console.log(this.state.data.response)
			//Image={card.blocks.main.elements[0].assets[0].file} 
			if(pap=="Guardian"){
			const validCards=this.state.data.response.results.filter(function(card){
				if(card.id=='' || card.blocks.body.length==0 )
				{
					return false;
				}else{
					return true;
				}
				});
				console.log("Logging Guardian Cards Valid Cards")
				console.log(validCards)
				var GCards=validCards
				var defGuarURL="https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
				for(var i=0;i<10;i++)
				{
					if(GCards[i].blocks.main== undefined|| GCards[i].blocks.main.elements ==undefined||GCards[i].blocks.main.elements.length==0 || GCards[i].blocks.main.elements[0].assets.length == 0)
					{
						GCards[i].blocks.main={element:defGuarURL}
						//GCards[i].blocks.main.element=defGuarURL;
					}else{
						GCards[i].blocks.main.element=GCards[i].blocks.main.elements[0].assets[GCards[i].blocks.main.elements[0].assets.length-1].file
					}
				}
			const cardsToPass=GCards.map(function(card){
			return <Card key={card.id} keys={card.id} WebURL={card.webUrl} type="g" ImageURL={card.blocks.main.element}
			Title={(card.webTitle).replace("%","Percent")} Section={card.sectionId} Dates={card.webPublicationDate} Description={card.blocks.body[0].bodyTextSummary}/>
			});
			//console.log(cardsToPass);
			//console.log(typeof(cardsToPass))
			//console.log(this.state.data.response.results[0].blocks.main.elements[0].assets[0].file)
			return (<div> {cardsToPass}</div>)
			}else{
			
			console.log("Ressss")
				console.log(this.state.data)
				var defURLNY="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
				const validCards=this.state.data.results.filter(function(card){
				if(card.url=='')
				{
					return false;
				}else{
					return true;
				}
				});
				//card.multimedia.length==0
				console.log("Logging Valid Body Cards NYT")
				console.log(validCards)
				
				var vc=validCards.slice(0,10)
				
				for(var i=0;i<10;i++)
				{
					var sz=vc[i].multimedia.length
					if(sz==0){
						vc[i].multimedia=[]
						var obj={url: defURLNY }
						vc[i].multimedia.push(obj)
					}else{
						var arr=[]
						for(var j=0;j<sz;j++)
						{
							if(vc[i].multimedia[j].width >=2000)
							{
								arr.push(vc[i].multimedia[j])
								break;
							}
						}
						if(arr.length==0)
						{
							vc[i].multimedia=[]
							var obj={url: defURLNY }
							vc[i].multimedia.push(obj)
						}else{
							vc[i].multimedia=[]
							vc[i].multimedia.push(arr[0])
						}
					}
				}
				console.log("Reached Herherher");
				const cardsToPass=vc.map(function(card){
				return <Card key={card.url} keys={card.url} WebURL={card.url} type="n" ImageURL={card.multimedia[0].url} 
				Title={(card.title).replace("%","Percent")} Section={card.section} Dates={card.published_date} Description={card.abstract}/>
				});
				
				console.log(cardsToPass);
				//console.log(typeof(cardsToPass))
				//console.log(this.state.data.response.results[0].blocks.main.elements[0].assets[0].file)
				return (<div> {cardsToPass}</div>)
			}
		}else{
			return (<SpinnerNoRefresh/>)
		}
	}
}



//Adding BodyCards
class BodyCards extends React.Component{
	constructor(){
		super()
		this.state={
			name:"Anamay",
			counter: 0,
			data:{},
			didReceive: false
		}
		this.refresh=this.refresh.bind(this)
	}
	refresh(){
		console.log("Refresh Called:")
		this.setState({didReceive:false})
	}
	componentDidMount(){		
		this.refresh()
		var pap=this.props.paper
		console.log("HHHHHpapapapapapap"+pap)
		fetch("https://nodeanamayproject.wn.r.appspot.com/getCards/"+pap)
		.then(response=>response.json())
		.then(dataset=> {
			this.setState({
			data:dataset,
			didReceive:true
		})
		})
		console.log("Set Did Recieve true");
	}
	
	
	componentWillReceiveProps(nextProps){
		//this.refresh()
	 console.log("Called Will Recieve props:");
		console.log(this.state.didReceive);
		console.log(this)
		 if (nextProps.paper !== this.props.paper) {
		console.log('pokemons state has changed.')
		console.log("Next props")
		console.log(nextProps)
		console.log("This props")
		console.log(this.props)
		this.refresh()
		var pap=this.props.paper
		console.log("HHHHHpapapapapapap"+pap)
		fetch("https://nodeanamayproject.wn.r.appspot.com/getCards/"+nextProps.paper)
		.then(response=>response.json())
		.then(dataset=> {
			this.setState({
			data:dataset,
			didReceive:true
		})
		})
	  }
		}
    render(){
		console.log("Called Body Card-----------");
		console.log(this.state.data)
		var pap=this.props.paper;
		console.log(pap)
		//const cardsToPass=this.state.data.response.results.map( card =>{ <Card key={card.id} Title={card.webTitle} Image={card.blocks.main.elements[0].assets[0].file} />
		if(this.state.didReceive){
			console.log("Called Insiee-e-----")
			console.log(this.state.data)
			
			if(pap=="Guardian")
			{
			//Image={card.blocks.main.elements[0].assets[0].file} 
				const validCards=this.state.data.response.results.filter(function(card){
				if(card.id=='' || card.blocks.body.length==0 )
				{
					return false;
				}else{
					return true;
				}
				});
				console.log("Logging Guardian Cards Valid Cards")
				console.log(validCards)
				var GCards=validCards
				var defGuarURL="https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
				for(var i=0;i<10;i++)
				{
					if(GCards[i].blocks.main== undefined|| GCards[i].blocks.main.elements ==undefined||GCards[i].blocks.main.elements.length==0 || GCards[i].blocks.main.elements[0].assets.length == 0)
					{
						GCards[i].blocks.main={element:defGuarURL}
					}else{
						GCards[i].blocks.main.element=GCards[i].blocks.main.elements[0].assets[GCards[i].blocks.main.elements[0].assets.length-1].file
					}
				}
				const cardsToPass=GCards.map(function(card){
				return <Card key={card.id} keys={card.id} WebURL={card.webUrl} type="g" ImageURL={card.blocks.main.element} 
				Title={(card.webTitle).replace("%","Percent")} Section={card.sectionId} Dates={card.webPublicationDate} Description={card.blocks.body[0].bodyTextSummary}/>
				});
				
				console.log(cardsToPass);
				//console.log(typeof(cardsToPass))
				//console.log(this.state.data.response.results[0].blocks.main.elements[0].assets[0].file)
				return (<div> {cardsToPass}</div>)
			}else{
				console.log("Ressss")
				console.log(this.state.data)
				var defURLNY="https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"
				const validCards=this.state.data.results.filter(function(card){
				if(card.url=='')
				{
					return false;
				}else{
					return true;
				}
				});
				//card.multimedia.length==0
				console.log("Logging Valid Body Cards NYT")
				console.log(validCards)
				
				var vc=validCards.slice(0,10)
				
				for(var i=0;i<10;i++)
				{
					var sz=vc[i].multimedia.length
					if(sz==0){
						vc[i].multimedia=[]
						var obj={url: defURLNY }
						vc[i].multimedia.push(obj)
					}else{
						var arr=[]
						for(var j=0;j<sz;j++)
						{
							if(vc[i].multimedia[j].width >=2000)
							{
								arr.push(vc[i].multimedia[j])
								break;
							}
						}
						if(arr.length==0)
						{
							vc[i].multimedia=[]
							var obj={url: defURLNY }
							vc[i].multimedia.push(obj)
						}else{
							vc[i].multimedia=[]
							vc[i].multimedia.push(arr[0])
						}
					}
				}
				//localStorage.setItem("ValidCards",JSON.stringify(validCards))
				console.log("Reached Herherher");
				console.log("Logging vc")
				console.log(vc)
				const cardsToPass=vc.map(function(card){
				return <Card key={card.url} keys={card.url} type="n" WebURL={card.url} ImageURL={card.multimedia[0].url} 
				Title={(card.title).replace("%","Percent")} Section={card.section} Dates={card.published_date} Description={card.abstract}/>
				});
				
				console.log(cardsToPass);
				//console.log(typeof(cardsToPass))
				//console.log(this.state.data.response.results[0].blocks.main.elements[0].assets[0].file)
				return (<div> {cardsToPass}</div>)
			}
			
			
			
		}else{
			return (<SpinnerNoRefresh/>)
		}
	}
}
ReactDOM.render(
 <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);