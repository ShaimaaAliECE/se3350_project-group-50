import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";
import FuilurePageMenu from "../FailurePageMenu";
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import { mergeSort } from "../../App";
import $ from "jquery";
import { MergeSortMenu } from "../../App";
import axios from "axios";

function LevelFive(){
    const[array, setArray] = useState(makeArray(50, 1, 100))
    let tempArray = [];
    let tempArray2 = [];
    let tempArray3 = [];
    let tempArray4 = [];
    let tempArray5 = [];
    let tempArray6 = [];
    let tempArray7 = [];
    let tempArray8 = [];

    useEffect(()=>{
        $("#stepTwo").hide()
        $("#stepThree").hide()
        $("#stepFour").hide()
        $("#stepFive").hide()
        $("#stepSix").hide()
        $("#stepSeven").hide()
        $("#stepEight").hide()
        $("#stepNine").hide()
        $("#stepTen").hide()
        $("#nextBtn").hide()
    }, []) 
    
    function setTempArray(changeToArray){
        tempArray = mergeSort(changeToArray);
    }
    function setTempArray2(changeToArray){
        tempArray2 = mergeSort(changeToArray);
    }
    function setTempArray3(changeToArray){
        tempArray3 = mergeSort(changeToArray);
    }
    function setTempArray4(changeToArray){
        tempArray4 = mergeSort(changeToArray);
    }
    function setTempArray5(changeToArray){
        tempArray5=mergeSort(changeToArray)
    }
    function setTempArray6(changeToArray){
        tempArray6=mergeSort(changeToArray)
    }
    function setTempArray7(changeToArray){
        tempArray7=mergeSort(changeToArray)
    }
    function setTempArray8(changeToArray){
        tempArray8=mergeSort(changeToArray)
    }
    return(
        <div>
        <table style={{marginLeft:"32%"}}><tbody><tr><Numbers array={array}/></tr></tbody></table>
        <table><tbody>{ReactDOM.render(
            <tr>
            <DropBox key={"1"} divideVal={array[0]} id="1"/>
            <DropBox key={"2"} divideVal={array[1]} id="2"/>
            <DropBox key={"3"} divideVal={array[2]} id="3"/>
            <DropBox key={"4"} divideVal={array[3]} id="4"/>
            <DropBox key={"5"} divideVal={array[4]} id="5"/>
            <DropBox key={"6"} divideVal={array[5]} id="6"/>
            <DropBox key={"7"} divideVal={array[6]} id="7"/>
            <DropBox key={"8"} divideVal={array[7]} id="8"/>
            <DropBox key={"9"} divideVal={array[8]} id="9"/>
            <DropBox key={"10"} divideVal={array[9]} id="10"/>
            <DropBox key={"11"} divideVal={array[0]} id="11"/>
            <DropBox key={"12"} divideVal={array[1]} id="12"/>
            <DropBox key={"13"} divideVal={array[2]} id="13"/>
            <DropBox key={"14"} divideVal={array[3]} id="14"/>
            <DropBox key={"15"} divideVal={array[4]} id="15"/>
            <DropBox key={"16"} divideVal={array[5]} id="16"/>
            <DropBox key={"17"} divideVal={array[6]} id="17"/>
            <DropBox key={"18"} divideVal={array[7]} id="18"/>
            <DropBox key={"19"} divideVal={array[8]} id="19"/>
            <DropBox key={"20"} divideVal={array[9]} id="20"/>
            <DropBox key={"21"} divideVal={array[5]} id="21"/>
            <DropBox key={"22"} divideVal={array[6]} id="22"/>
            <DropBox key={"23"} divideVal={array[7]} id="23"/>
            <DropBox key={"24"} divideVal={array[8]} id="24"/>
            <DropBox key={"25"} divideVal={array[9]} id="25"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"26"} divideVal={array[0]} id="26"/>
            <DropBox key={"27"} divideVal={array[1]} id="27"/>
            <DropBox key={"28"} divideVal={array[2]} id="28"/>
            <DropBox key={"29"} divideVal={array[3]} id="29"/>
            <DropBox key={"30"} divideVal={array[4]} id="30"/>
            <DropBox key={"31"} divideVal={array[5]} id="31"/>
            <DropBox key={"32"} divideVal={array[6]} id="32"/>
            <DropBox key={"33"} divideVal={array[7]} id="33"/>
            <DropBox key={"34"} divideVal={array[8]} id="34"/>
            <DropBox key={"35"} divideVal={array[9]} id="35"/>
            <DropBox key={"36"} divideVal={array[0]} id="36"/>
            <DropBox key={"37"} divideVal={array[1]} id="37"/>
            <DropBox key={"38"} divideVal={array[2]} id="38"/>
            <DropBox key={"39"} divideVal={array[3]} id="39"/>
            <DropBox key={"40"} divideVal={array[4]} id="40"/>
            <DropBox key={"41"} divideVal={array[5]} id="41"/>
            <DropBox key={"42"} divideVal={array[6]} id="42"/>
            <DropBox key={"43"} divideVal={array[7]} id="43"/>
            <DropBox key={"44"} divideVal={array[8]} id="44"/>
            <DropBox key={"45"} divideVal={array[9]} id="45"/>
            <DropBox key={"46"} divideVal={array[5]} id="46"/>
            <DropBox key={"47"} divideVal={array[6]} id="47"/>
            <DropBox key={"48"} divideVal={array[7]} id="48"/>
            <DropBox key={"49"} divideVal={array[8]} id="49"/>
            <DropBox key={"50"} divideVal={array[9]} id="50"/>
            </tr>
        , document.getElementById("stepOne"))}
        {
        ReactDOM.render(<tr>
            <DropBox key={"51"} divideVal={array[0]} id="51"/>
            <DropBox key={"52"} divideVal={array[1]} id="52"/>
            <DropBox key={"53"} divideVal={array[2]} id="53"/>
            <DropBox key={"54"} divideVal={array[3]} id="54"/>
            <DropBox key={"55"} divideVal={array[4]} id="55"/>
            <DropBox key={"56"} divideVal={array[0]} id="56"/>
            <DropBox key={"57"} divideVal={array[1]} id="57"/>
            <DropBox key={"58"} divideVal={array[2]} id="58"/>
            <DropBox key={"59"} divideVal={array[3]} id="59"/>
            <DropBox key={"60"} divideVal={array[4]} id="60"/>
            &nbsp;
            &nbsp;
            <DropBox key={"61"} divideVal={array[5]} id="61"/>
            <DropBox key={"62"} divideVal={array[6]} id="62"/>
            <DropBox key={"63"} divideVal={array[7]} id="63"/>
            <DropBox key={"64"} divideVal={array[8]} id="64"/>
            <DropBox key={"65"} divideVal={array[9]} id="65"/>
            <DropBox key={"66"} divideVal={array[0]} id="66"/>
            <DropBox key={"67"} divideVal={array[1]} id="67"/>
            <DropBox key={"68"} divideVal={array[2]} id="68"/>
            <DropBox key={"69"} divideVal={array[3]} id="69"/>
            <DropBox key={"70"} divideVal={array[4]} id="70"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"71"} divideVal={array[10]} id="71"/>
            <DropBox key={"72"} divideVal={array[11]} id="72"/>
            <DropBox key={"73"} divideVal={array[12]} id="73"/>
            <DropBox key={"74"} divideVal={array[13]} id="74"/>
            <DropBox key={"75"} divideVal={array[14]} id="75"/>
            <DropBox key={"76"} divideVal={array[0]} id="76"/>
            <DropBox key={"77"} divideVal={array[1]} id="77"/>
            <DropBox key={"78"} divideVal={array[2]} id="78"/>
            <DropBox key={"79"} divideVal={array[3]} id="79"/>
            <DropBox key={"80"} divideVal={array[4]} id="80"/>
            &nbsp;
            &nbsp;
            <DropBox key={"81"} divideVal={array[15]} id="81"/>
            <DropBox key={"82"} divideVal={array[16]} id="82"/> 
            <DropBox key={"83"} divideVal={array[17]} id="83"/>
            <DropBox key={"84"} divideVal={array[18]} id="84"/>
            <DropBox key={"85"} divideVal={array[19]} id="85"/>
            <DropBox key={"86"} divideVal={array[0]} id="86"/>
            <DropBox key={"87"} divideVal={array[1]} id="87"/>
            <DropBox key={"88"} divideVal={array[2]} id="88"/>
            <DropBox key={"89"} divideVal={array[3]} id="89"/>
            <DropBox key={"90"} divideVal={array[4]} id="90"/>
            &nbsp;
            &nbsp;
            <DropBox key={"91"} divideVal={array[15]} id="91"/>
            <DropBox key={"92"} divideVal={array[16]} id="92"/> 
            <DropBox key={"93"} divideVal={array[17]} id="93"/>
            <DropBox key={"94"} divideVal={array[18]} id="94"/>
            <DropBox key={"95"} divideVal={array[19]} id="95"/>
            <DropBox key={"96"} divideVal={array[0]} id="96"/>
            <DropBox key={"97"} divideVal={array[1]} id="97"/>
            <DropBox key={"98"} divideVal={array[2]} id="98"/>
            <DropBox key={"99"} divideVal={array[3]} id="99"/>
            <DropBox key={"100"} divideVal={array[4]} id="100"/>
            </tr>, document.getElementById("stepTwo"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"41"} divideVal={array[0]} id="41"/>
            <DropBox key={"42"} divideVal={array[1]} id="42"/>
            <DropBox key={"43"} divideVal={array[2]} id="43"/>
            <DropBox key={"44"} divideVal={array[3]} id="44"/>
            <DropBox key={"45"} divideVal={array[4]} id="45"/>  
            &nbsp;
            &nbsp;
            <DropBox key={"44"} divideVal={array[3]} id="44"/>
            <DropBox key={"45"} divideVal={array[4]} id="45"/>
            <DropBox key={"51"} divideVal={array[10]} id="51"/>
            <DropBox key={"52"} divideVal={array[11]} id="52"/>  
            <DropBox key={"53"} divideVal={array[12]} id="53"/> 
            &nbsp;
            &nbsp;         
            <DropBox key={"46"} divideVal={array[5]} id="46"/>
            <DropBox key={"47"} divideVal={array[6]} id="47"/>
            <DropBox key={"48"} divideVal={array[7]} id="48"/>
            <DropBox key={"49"} divideVal={array[8]} id="49"/>
            <DropBox key={"50"} divideVal={array[9]} id="50"/>
            &nbsp;
            &nbsp;
            <DropBox key={"49"} divideVal={array[8]} id="49"/>
            <DropBox key={"50"} divideVal={array[9]} id="50"/>
            <DropBox key={"51"} divideVal={array[10]} id="51"/>
            <DropBox key={"52"} divideVal={array[11]} id="52"/>  
            <DropBox key={"53"} divideVal={array[12]} id="53"/>
            &nbsp;
            &nbsp;
            <DropBox key={"51"} divideVal={array[10]} id="51"/>
            <DropBox key={"52"} divideVal={array[11]} id="52"/>  
            <DropBox key={"53"} divideVal={array[12]} id="53"/>
            <DropBox key={"54"} divideVal={array[13]} id="54"/> 
            <DropBox key={"55"} divideVal={array[14]} id="55"/>
            &nbsp;
            &nbsp;
            <DropBox key={"54"} divideVal={array[13]} id="54"/> 
            <DropBox key={"55"} divideVal={array[14]} id="55"/>
            <DropBox key={"51"} divideVal={array[10]} id="51"/>
            <DropBox key={"52"} divideVal={array[11]} id="52"/>  
            <DropBox key={"53"} divideVal={array[12]} id="53"/>
            &nbsp;
            &nbsp;
            <DropBox key={"56"} divideVal={array[15]} id="56"/>
            <DropBox key={"57"} divideVal={array[16]} id="57"/>
            <DropBox key={"58"} divideVal={array[17]} id="58"/>
            <DropBox key={"59"} divideVal={array[18]} id="59"/>
            <DropBox key={"60"} divideVal={array[19]} id="60"/>
            &nbsp;
            &nbsp;
            <DropBox key={"59"} divideVal={array[18]} id="59"/>
            <DropBox key={"60"} divideVal={array[19]} id="60"/>
            <DropBox key={"51"} divideVal={array[10]} id="51"/>
            <DropBox key={"52"} divideVal={array[11]} id="52"/>  
            <DropBox key={"53"} divideVal={array[12]} id="53"/>
            &nbsp;
            &nbsp;
            <DropBox key={"59"} divideVal={array[18]} id="59"/>
            <DropBox key={"60"} divideVal={array[19]} id="60"/>
            <DropBox key={"51"} divideVal={array[10]} id="51"/>
            <DropBox key={"52"} divideVal={array[11]} id="52"/>  
            <DropBox key={"53"} divideVal={array[12]} id="53"/>
            &nbsp;
            &nbsp;
            <DropBox key={"59"} divideVal={array[18]} id="59"/>
            <DropBox key={"60"} divideVal={array[19]} id="60"/>
            <DropBox key={"51"} divideVal={array[10]} id="51"/>
            <DropBox key={"52"} divideVal={array[11]} id="52"/>  
            <DropBox key={"53"} divideVal={array[12]} id="53"/>
            </tr>, document.getElementById("stepThree"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"61"} divideVal={array[0]} id="61"/>
            <DropBox key={"62"} divideVal={array[1]} id="62"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"64"} divideVal={array[3]} id="64"/> 
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"65"} divideVal={array[4]} id="65"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"66"} divideVal={array[5]} id="66"/>
            <DropBox key={"67"} divideVal={array[6]} id="67"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"68"} divideVal={array[7]} id="68"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"69"} divideVal={array[8]} id="69"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"70"} divideVal={array[9]} id="70"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"71"} divideVal={array[10]} id="71"/> 
            <DropBox key={"72"} divideVal={array[11]} id="72"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"73"} divideVal={array[12]} id="73"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"74"} divideVal={array[13]} id="74"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"75"} divideVal={array[14]} id="75"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"76"} divideVal={array[15]} id="76"/>
            <DropBox key={"77"} divideVal={array[16]} id="77"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"78"} divideVal={array[17]} id="78"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"79"} divideVal={array[18]} id="79"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"80"} divideVal={array[19]} id="80"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"79"} divideVal={array[18]} id="79"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"80"} divideVal={array[19]} id="80"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"79"} divideVal={array[18]} id="79"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            &nbsp;
            &nbsp;
            <DropBox key={"80"} divideVal={array[19]} id="80"/>
            <DropBox key={"63"} divideVal={array[2]} id="63"/>
            </tr>, document.getElementById("stepFour"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"81"} divideVal={array[0]} id="81"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"83"} divideVal={array[2]} id="83"/>
            &nbsp;
            &nbsp;
            <DropBox key={"84"} divideVal={array[3]} id="84"/>
            &nbsp;
            &nbsp;
            <DropBox key={"85"} divideVal={array[4]} id="85"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"86"} divideVal={array[5]} id="86"/>
            &nbsp;
            &nbsp;
            <DropBox key={"87"} divideVal={array[6]} id="87"/>
            &nbsp;
            &nbsp;
            <DropBox key={"88"} divideVal={array[7]} id="88"/>
            &nbsp;
            &nbsp;
            <DropBox key={"89"} divideVal={array[8]} id="89"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"90"} divideVal={array[9]} id="90"/>
            &nbsp;
            &nbsp;
            <DropBox key={"91"} divideVal={array[10]} id="91"/>
            &nbsp;
            &nbsp;
            <DropBox key={"92"} divideVal={array[11]} id="92"/>
            &nbsp;
            &nbsp;
            <DropBox key={"93"} divideVal={array[12]} id="93"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"94"} divideVal={array[13]} id="94"/>
            &nbsp;
            &nbsp;
            <DropBox key={"95"} divideVal={array[14]} id="95"/>
            &nbsp;
            &nbsp;
            <DropBox key={"96"} divideVal={array[15]} id="96"/>
            &nbsp;
            &nbsp;
            <DropBox key={"97"} divideVal={array[16]} id="97"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"98"} divideVal={array[17]} id="98"/>
            &nbsp;
            &nbsp;
            <DropBox key={"99"} divideVal={array[18]} id="99"/>
            &nbsp;
            &nbsp;
            <DropBox key={"100"} divideVal={array[19]} id="100"/>
            &nbsp;
            &nbsp;
            <DropBox key={"97"} divideVal={array[16]} id="97"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"98"} divideVal={array[17]} id="98"/>
            &nbsp;
            &nbsp;
            <DropBox key={"99"} divideVal={array[18]} id="99"/>
            &nbsp;
            &nbsp;
            <DropBox key={"100"} divideVal={array[19]} id="100"/>
            &nbsp;
            &nbsp;
            <DropBox key={"97"} divideVal={array[16]} id="97"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"98"} divideVal={array[17]} id="98"/>
            &nbsp;
            &nbsp;
            <DropBox key={"99"} divideVal={array[18]} id="99"/>
            &nbsp;
            &nbsp;
            <DropBox key={"100"} divideVal={array[19]} id="100"/>
            &nbsp;
            &nbsp;
            <DropBox key={"97"} divideVal={array[16]} id="97"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"98"} divideVal={array[17]} id="98"/>
            &nbsp;
            &nbsp;
            <DropBox key={"99"} divideVal={array[18]} id="99"/>
            &nbsp;
            &nbsp;
            <DropBox key={"100"} divideVal={array[19]} id="100"/>
            &nbsp;
            &nbsp;
            <DropBox key={"97"} divideVal={array[16]} id="97"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"98"} divideVal={array[17]} id="98"/>
            &nbsp;
            &nbsp;
            <DropBox key={"99"} divideVal={array[18]} id="99"/>
            &nbsp;
            &nbsp;
            <DropBox key={"100"} divideVal={array[19]} id="100"/>
            &nbsp;
            &nbsp;
            <DropBox key={"97"} divideVal={array[16]} id="97"/>
            <DropBox key={"82"} divideVal={array[1]} id="82"/>
            &nbsp;
            &nbsp;
            <DropBox key={"98"} divideVal={array[17]} id="98"/>
            &nbsp;
            &nbsp;
            <DropBox key={"99"} divideVal={array[18]} id="99"/>
            &nbsp;
            &nbsp;
            <DropBox key={"100"} divideVal={array[19]} id="100"/>
            </tr>, document.getElementById("stepFive"))
        }
        {setTempArray([array[0], array[1]])}
        {setTempArray2([array[5], array[6]])}
        {setTempArray3([array[10], array[11]])}
        {setTempArray4([array[15], array[16]])}
        {
            ReactDOM.render(<tr>
            <DropBox key={"101"} divideVal={tempArray[0]} id="101"/>
            &nbsp;
            &nbsp;
            <DropBox key={"103"} divideVal={array[2]} id="103"/> 
            &nbsp;
            &nbsp;          
            <DropBox key={"104"} divideVal={array[3]} id="104"/>
            &nbsp;
            &nbsp;
            <DropBox key={"105"} divideVal={array[4]} id="105"/>
            &nbsp;
            &nbsp;
            <DropBox key={"106"} divideVal={tempArray2[0]} id="106"/>
            &nbsp;
            &nbsp;
            <DropBox key={"108"} divideVal={array[7]} id="108"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"109"} divideVal={array[8]} id="109"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"110"} divideVal={array[9]} id="110"/>
            &nbsp;
            &nbsp;
            <DropBox key={"111"} divideVal={tempArray3[0]} id="111"/>
            &nbsp;
            &nbsp;
            <DropBox key={"113"} divideVal={array[12]} id="113"/>
            &nbsp;
            &nbsp;
            <DropBox key={"114"} divideVal={array[13]} id="114"/>
            &nbsp;
            &nbsp;
            <DropBox key={"115"} divideVal={array[14]} id="115"/>
            &nbsp;
            &nbsp;
            <DropBox key={"116"} divideVal={tempArray4[0]} id="116"/>
            &nbsp;
            &nbsp;
            <DropBox key={"118"} divideVal={array[17]} id="118"/>
            &nbsp;
            &nbsp;
            <DropBox key={"119"} divideVal={array[18]} id="119"/>
            &nbsp;
            &nbsp;
            <DropBox key={"120"} divideVal={array[19]} id="200"/>
            &nbsp;
            &nbsp;
            <DropBox key={"116"} divideVal={tempArray4[0]} id="116"/>
            &nbsp;
            &nbsp;
            <DropBox key={"118"} divideVal={array[17]} id="118"/>
            &nbsp;
            &nbsp;
            <DropBox key={"119"} divideVal={array[18]} id="119"/>
            &nbsp;
            &nbsp;
            <DropBox key={"120"} divideVal={array[19]} id="200"/>
            <DropBox key={"101"} divideVal={tempArray[0]} id="101"/>
            &nbsp;
            &nbsp;
            <DropBox key={"103"} divideVal={array[2]} id="103"/> 
            &nbsp;
            &nbsp;          
            <DropBox key={"104"} divideVal={array[3]} id="104"/>
            &nbsp;
            &nbsp;
            <DropBox key={"105"} divideVal={array[4]} id="105"/>
            &nbsp;
            &nbsp;
            <DropBox key={"106"} divideVal={tempArray2[0]} id="106"/>
            &nbsp;
            &nbsp;
            <DropBox key={"108"} divideVal={array[7]} id="108"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"109"} divideVal={array[8]} id="109"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"110"} divideVal={array[9]} id="110"/>
            &nbsp;
            &nbsp;
            <DropBox key={"111"} divideVal={tempArray3[0]} id="111"/>
            &nbsp;
            &nbsp;
            <DropBox key={"113"} divideVal={array[12]} id="113"/>
            &nbsp;
            &nbsp;
            <DropBox key={"114"} divideVal={array[13]} id="114"/>
            &nbsp;
            &nbsp;
            <DropBox key={"115"} divideVal={array[14]} id="115"/>
            &nbsp;
            &nbsp;
            <DropBox key={"116"} divideVal={tempArray4[0]} id="116"/>
            &nbsp;
            &nbsp;
            <DropBox key={"118"} divideVal={array[17]} id="118"/>
            &nbsp;
            &nbsp;
            <DropBox key={"119"} divideVal={array[18]} id="119"/>
            &nbsp;
            &nbsp;
            <DropBox key={"120"} divideVal={array[19]} id="200"/>
            &nbsp;
            &nbsp;
            <DropBox key={"116"} divideVal={tempArray4[0]} id="116"/>
            &nbsp;
            &nbsp;
            <DropBox key={"118"} divideVal={array[17]} id="118"/>
            &nbsp;
            &nbsp;
            <DropBox key={"119"} divideVal={array[18]} id="119"/>
            &nbsp;
            &nbsp;
            <DropBox key={"120"} divideVal={array[19]} id="200"/>
            &nbsp;
            &nbsp;
            <DropBox key={"113"} divideVal={array[12]} id="113"/>
            &nbsp;
            &nbsp;
            <DropBox key={"114"} divideVal={array[13]} id="114"/>
            &nbsp;
            &nbsp;
            <DropBox key={"115"} divideVal={array[14]} id="115"/>
            &nbsp;
            &nbsp;
            <DropBox key={"116"} divideVal={tempArray4[0]} id="116"/>
            &nbsp;
            &nbsp;
            <DropBox key={"118"} divideVal={array[17]} id="118"/>
            &nbsp;
            &nbsp;
            <DropBox key={"119"} divideVal={array[18]} id="119"/>
            &nbsp;
            &nbsp;
            <DropBox key={"120"} divideVal={array[19]} id="200"/>
            &nbsp;
            &nbsp;
            <DropBox key={"116"} divideVal={tempArray4[0]} id="116"/>
            &nbsp;
            &nbsp;
            <DropBox key={"118"} divideVal={array[17]} id="118"/>
            &nbsp;
            &nbsp;
            <DropBox key={"119"} divideVal={array[18]} id="119"/>
            </tr>, document.getElementById("stepSix"))
        }
        {setTempArray([array[0], array[1], array[2]])}
        {setTempArray2([array[3], array[4]])}
        {setTempArray3([array[5], array[6], array[7]])}
        {setTempArray4([array[8], array[9]])}
        {setTempArray5([array[10], array[11], array[12]])}
        {setTempArray6([array[13], array[14]])}
        {setTempArray7([array[15], array[16], array[17]])}
        {setTempArray8([array[18], array[19]])}
        {
        ReactDOM.render(<tr>
            <DropBox key={"121"} divideVal={tempArray[0]} id="121"/>
            <DropBox key={"122"} divideVal={tempArray[1]} id="122"/>
            &nbsp;
            &nbsp;
            <DropBox key={"124"} divideVal={tempArray2[0]} id="124"/>
            &nbsp;
            &nbsp;
            <DropBox key={"126"} divideVal={tempArray3[0]} id="126"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"129"} divideVal={tempArray4[0]} id="129"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"131"} divideVal={tempArray5[0]} id="131"/>
            <DropBox key={"132"} divideVal={tempArray5[1]} id="132"/>
            &nbsp;
            &nbsp;
            <DropBox key={"134"} divideVal={tempArray6[0]} id="134"/>
            &nbsp;
            &nbsp;
            <DropBox key={"136"} divideVal={tempArray7[0]} id="136"/>
            &nbsp;
            &nbsp;
            <DropBox key={"139"} divideVal={tempArray8[0]} id="139"/>
            &nbsp;
            &nbsp;
            <DropBox key={"121"} divideVal={tempArray[0]} id="121"/>
            <DropBox key={"122"} divideVal={tempArray[1]} id="122"/>
            &nbsp;
            &nbsp;
            <DropBox key={"124"} divideVal={tempArray2[0]} id="124"/>
            &nbsp;
            &nbsp;
            <DropBox key={"126"} divideVal={tempArray3[0]} id="126"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"129"} divideVal={tempArray4[0]} id="129"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"131"} divideVal={tempArray5[0]} id="131"/>
            <DropBox key={"132"} divideVal={tempArray5[1]} id="132"/>
            &nbsp;
            &nbsp;
            <DropBox key={"134"} divideVal={tempArray6[0]} id="134"/>
            &nbsp;
            &nbsp;
            <DropBox key={"136"} divideVal={tempArray7[0]} id="136"/>
            &nbsp;
            &nbsp;
            <DropBox key={"139"} divideVal={tempArray8[0]} id="139"/>
            &nbsp;
            &nbsp;
            <DropBox key={"121"} divideVal={tempArray[0]} id="121"/>
            <DropBox key={"122"} divideVal={tempArray[1]} id="122"/>
            &nbsp;
            &nbsp;
            <DropBox key={"124"} divideVal={tempArray2[0]} id="124"/>
            &nbsp;
            &nbsp;
            <DropBox key={"126"} divideVal={tempArray3[0]} id="126"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"129"} divideVal={tempArray4[0]} id="129"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"131"} divideVal={tempArray5[0]} id="131"/>
            <DropBox key={"132"} divideVal={tempArray5[1]} id="132"/>
            &nbsp;
            &nbsp;
            <DropBox key={"134"} divideVal={tempArray6[0]} id="134"/>
            &nbsp;
            &nbsp;
            <DropBox key={"136"} divideVal={tempArray7[0]} id="136"/>
            &nbsp;
            &nbsp;
            <DropBox key={"139"} divideVal={tempArray8[0]} id="139"/>
            &nbsp;
            &nbsp;
            <DropBox key={"121"} divideVal={tempArray[0]} id="121"/>
            <DropBox key={"122"} divideVal={tempArray[1]} id="122"/>
            &nbsp;
            &nbsp;
            <DropBox key={"124"} divideVal={tempArray2[0]} id="124"/>
            &nbsp;
            &nbsp;
            <DropBox key={"126"} divideVal={tempArray3[0]} id="126"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"129"} divideVal={tempArray4[0]} id="129"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"131"} divideVal={tempArray5[0]} id="131"/>
            <DropBox key={"132"} divideVal={tempArray5[1]} id="132"/>
            &nbsp;
            &nbsp;
            <DropBox key={"134"} divideVal={tempArray6[0]} id="134"/>
            &nbsp;
            &nbsp;
            <DropBox key={"136"} divideVal={tempArray7[0]} id="136"/>
            &nbsp;
            &nbsp;
            <DropBox key={"139"} divideVal={tempArray8[0]} id="139"/>
            &nbsp;
            &nbsp;
            <DropBox key={"121"} divideVal={tempArray[0]} id="121"/>
            <DropBox key={"122"} divideVal={tempArray[1]} id="122"/>
            &nbsp;
            &nbsp;
            <DropBox key={"124"} divideVal={tempArray2[0]} id="124"/>
            &nbsp;
            &nbsp;
            <DropBox key={"126"} divideVal={tempArray3[0]} id="126"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"129"} divideVal={tempArray4[0]} id="129"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"131"} divideVal={tempArray5[0]} id="131"/>
            <DropBox key={"132"} divideVal={tempArray5[1]} id="132"/>
            &nbsp;
            &nbsp;
            <DropBox key={"134"} divideVal={tempArray6[0]} id="134"/>
            &nbsp;
            &nbsp;
            <DropBox key={"136"} divideVal={tempArray7[0]} id="136"/>
            &nbsp;
            &nbsp;
            <DropBox key={"139"} divideVal={tempArray8[0]} id="139"/>
            </tr>, document.getElementById("stepSeven"))
        }
        {setTempArray([array[0], array[1], array[2], array[3], array[4]])}
        {setTempArray2([array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray3([array[10], array[11], array[12], array[13], array[14]])}
        {setTempArray4([array[15], array[16], array[17], array[18], array[19]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"141"} divideVal={tempArray[0]} id="141"/>
            <DropBox key={"142"} divideVal={tempArray[1]} id="142"/>
            <DropBox key={"143"} divideVal={tempArray[2]} id="143"/>
            &nbsp;
            &nbsp;
            <DropBox key={"144"} divideVal={tempArray[3]} id="144"/>
            <DropBox key={"145"} divideVal={tempArray[4]} id="145"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"146"} divideVal={tempArray2[0]} id="146"/>
            <DropBox key={"147"} divideVal={tempArray2[1]} id="147"/>
            <DropBox key={"148"} divideVal={tempArray2[2]} id="148"/>
            &nbsp;
            &nbsp;
            <DropBox key={"149"} divideVal={tempArray2[3]} id="149"/>
            <DropBox key={"150"} divideVal={tempArray2[4]} id="150"/>
            &nbsp;
            &nbsp;
            <DropBox key={"151"} divideVal={tempArray3[0]} id="151"/>
            <DropBox key={"152"} divideVal={tempArray3[1]} id="152"/>
            <DropBox key={"153"} divideVal={tempArray3[2]} id="153"/>
            &nbsp;
            &nbsp;
            <DropBox key={"154"} divideVal={tempArray3[3]} id="154"/>
            <DropBox key={"155"} divideVal={tempArray3[4]} id="155"/>
            &nbsp;
            &nbsp;
            <DropBox key={"156"} divideVal={tempArray4[0]} id="156"/>
            <DropBox key={"157"} divideVal={tempArray4[1]} id="157"/>
            <DropBox key={"158"} divideVal={tempArray4[2]} id="158"/>
            &nbsp;
            &nbsp;
            <DropBox key={"159"} divideVal={tempArray4[3]} id="159"/>
            <DropBox key={"160"} divideVal={tempArray4[4]} id="160"/>
            &nbsp;
            &nbsp;
            <DropBox key={"141"} divideVal={tempArray[0]} id="141"/>
            <DropBox key={"142"} divideVal={tempArray[1]} id="142"/>
            <DropBox key={"143"} divideVal={tempArray[2]} id="143"/>
            &nbsp;
            &nbsp;
            <DropBox key={"144"} divideVal={tempArray[3]} id="144"/>
            <DropBox key={"145"} divideVal={tempArray[4]} id="145"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"146"} divideVal={tempArray2[0]} id="146"/>
            <DropBox key={"147"} divideVal={tempArray2[1]} id="147"/>
            <DropBox key={"148"} divideVal={tempArray2[2]} id="148"/>
            &nbsp;
            &nbsp;
            <DropBox key={"149"} divideVal={tempArray2[3]} id="149"/>
            <DropBox key={"150"} divideVal={tempArray2[4]} id="150"/>
            &nbsp;
            &nbsp;
            <DropBox key={"151"} divideVal={tempArray3[0]} id="151"/>
            <DropBox key={"152"} divideVal={tempArray3[1]} id="152"/>
            <DropBox key={"153"} divideVal={tempArray3[2]} id="153"/>
            &nbsp;
            &nbsp;
            <DropBox key={"154"} divideVal={tempArray3[3]} id="154"/>
            <DropBox key={"155"} divideVal={tempArray3[4]} id="155"/>
            &nbsp;
            &nbsp;
            <DropBox key={"156"} divideVal={tempArray4[0]} id="156"/>
            <DropBox key={"157"} divideVal={tempArray4[1]} id="157"/>
            <DropBox key={"158"} divideVal={tempArray4[2]} id="158"/>
            &nbsp;
            &nbsp;
            <DropBox key={"159"} divideVal={tempArray4[3]} id="159"/>
            <DropBox key={"160"} divideVal={tempArray4[4]} id="160"/>
            &nbsp;
            &nbsp;
            <DropBox key={"151"} divideVal={tempArray3[0]} id="151"/>
            <DropBox key={"152"} divideVal={tempArray3[1]} id="152"/>
            <DropBox key={"153"} divideVal={tempArray3[2]} id="153"/>
            &nbsp;
            &nbsp;
            <DropBox key={"154"} divideVal={tempArray3[3]} id="154"/>
            <DropBox key={"155"} divideVal={tempArray3[4]} id="155"/>
            &nbsp;
            &nbsp;
            <DropBox key={"156"} divideVal={tempArray4[0]} id="156"/>
            <DropBox key={"157"} divideVal={tempArray4[1]} id="157"/>
            <DropBox key={"158"} divideVal={tempArray4[2]} id="158"/>
            &nbsp;
            &nbsp;
            <DropBox key={"159"} divideVal={tempArray4[3]} id="159"/>
            <DropBox key={"160"} divideVal={tempArray4[4]} id="160"/>
            </tr>
        , document.getElementById("stepEight"))}
        {setTempArray([array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray2([array[10], array[11], array[12], array[13], array[14], array[15], array[16], array[17], array[18], array[19]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"161"} divideVal={tempArray[0]} id="161"/>
            <DropBox key={"162"} divideVal={tempArray[1]} id="162"/>
            <DropBox key={"163"} divideVal={tempArray[2]} id="163"/>
            <DropBox key={"164"} divideVal={tempArray[3]} id="164"/>
            <DropBox key={"165"} divideVal={tempArray[4]} id="165"/>
            &nbsp;
            &nbsp;
            <DropBox key={"166"} divideVal={tempArray[5]} id="166"/>
            <DropBox key={"167"} divideVal={tempArray[6]} id="167"/>
            <DropBox key={"168"} divideVal={tempArray[7]} id="168"/>
            <DropBox key={"169"} divideVal={tempArray[8]} id="169"/>
            <DropBox key={"170"} divideVal={tempArray[9]} id="170"/>
            &nbsp;
            &nbsp;
            <DropBox key={"171"} divideVal={tempArray2[0]} id="171"/>
            <DropBox key={"172"} divideVal={tempArray2[1]} id="172"/>
            <DropBox key={"173"} divideVal={tempArray2[2]} id="173"/>
            <DropBox key={"174"} divideVal={tempArray2[3]} id="174"/>
            <DropBox key={"175"} divideVal={tempArray2[4]} id="175"/>
            &nbsp;
            &nbsp;
            <DropBox key={"176"} divideVal={tempArray2[5]} id="176"/>
            <DropBox key={"177"} divideVal={tempArray2[6]} id="177"/>
            <DropBox key={"178"} divideVal={tempArray2[7]} id="178"/>
            <DropBox key={"179"} divideVal={tempArray2[8]} id="179"/>
            <DropBox key={"180"} divideVal={tempArray2[9]} id="180"/>
            &nbsp;
            &nbsp;
            <DropBox key={"161"} divideVal={tempArray[0]} id="161"/>
            <DropBox key={"162"} divideVal={tempArray[1]} id="162"/>
            <DropBox key={"163"} divideVal={tempArray[2]} id="163"/>
            <DropBox key={"164"} divideVal={tempArray[3]} id="164"/>
            <DropBox key={"165"} divideVal={tempArray[4]} id="165"/>
            &nbsp;
            &nbsp;
            <DropBox key={"166"} divideVal={tempArray[5]} id="166"/>
            <DropBox key={"167"} divideVal={tempArray[6]} id="167"/>
            <DropBox key={"168"} divideVal={tempArray[7]} id="168"/>
            <DropBox key={"169"} divideVal={tempArray[8]} id="169"/>
            <DropBox key={"170"} divideVal={tempArray[9]} id="170"/>
            &nbsp;
            &nbsp;
            <DropBox key={"171"} divideVal={tempArray2[0]} id="171"/>
            <DropBox key={"172"} divideVal={tempArray2[1]} id="172"/>
            <DropBox key={"173"} divideVal={tempArray2[2]} id="173"/>
            <DropBox key={"174"} divideVal={tempArray2[3]} id="174"/>
            <DropBox key={"175"} divideVal={tempArray2[4]} id="175"/>
            &nbsp;
            &nbsp;
            <DropBox key={"176"} divideVal={tempArray2[5]} id="176"/>
            <DropBox key={"177"} divideVal={tempArray2[6]} id="177"/>
            <DropBox key={"178"} divideVal={tempArray2[7]} id="178"/>
            <DropBox key={"179"} divideVal={tempArray2[8]} id="179"/>
            <DropBox key={"180"} divideVal={tempArray2[9]} id="180"/>
            &nbsp;
            &nbsp;
            <DropBox key={"171"} divideVal={tempArray2[0]} id="171"/>
            <DropBox key={"172"} divideVal={tempArray2[1]} id="172"/>
            <DropBox key={"173"} divideVal={tempArray2[2]} id="173"/>
            <DropBox key={"174"} divideVal={tempArray2[3]} id="174"/>
            <DropBox key={"175"} divideVal={tempArray2[4]} id="175"/>
            &nbsp;
            &nbsp;
            <DropBox key={"176"} divideVal={tempArray2[5]} id="176"/>
            <DropBox key={"177"} divideVal={tempArray2[6]} id="177"/>
            <DropBox key={"178"} divideVal={tempArray2[7]} id="178"/>
            <DropBox key={"179"} divideVal={tempArray2[8]} id="179"/>
            <DropBox key={"180"} divideVal={tempArray2[9]} id="180"/>
            </tr>
        , document.getElementById("stepNine"))}
        {setTempArray([...array])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"181"} divideVal={tempArray[0]} id="181"/>
            <DropBox key={"182"} divideVal={tempArray[1]} id="182"/>
            <DropBox key={"183"} divideVal={tempArray[2]} id="183"/>
            <DropBox key={"184"} divideVal={tempArray[3]} id="184"/>
            <DropBox key={"185"} divideVal={tempArray[4]} id="185"/> 
            <DropBox key={"186"} divideVal={tempArray[5]} id="186"/>
            <DropBox key={"187"} divideVal={tempArray[6]} id="187"/>
            <DropBox key={"188"} divideVal={tempArray[7]} id="188"/>
            <DropBox key={"189"} divideVal={tempArray[8]} id="189"/>
            <DropBox key={"190"} divideVal={tempArray[9]} id="190"/>
            <DropBox key={"181"} divideVal={tempArray[0]} id="181"/>
            <DropBox key={"182"} divideVal={tempArray[1]} id="182"/>
            <DropBox key={"183"} divideVal={tempArray[2]} id="183"/>
            <DropBox key={"184"} divideVal={tempArray[3]} id="184"/>
            <DropBox key={"185"} divideVal={tempArray[4]} id="185"/> 
            <DropBox key={"186"} divideVal={tempArray[5]} id="186"/>
            <DropBox key={"187"} divideVal={tempArray[6]} id="187"/>
            <DropBox key={"188"} divideVal={tempArray[7]} id="188"/>
            <DropBox key={"189"} divideVal={tempArray[8]} id="189"/>
            <DropBox key={"190"} divideVal={tempArray[9]} id="190"/>
            <DropBox key={"186"} divideVal={tempArray[5]} id="186"/>
            <DropBox key={"187"} divideVal={tempArray[6]} id="187"/>
            <DropBox key={"188"} divideVal={tempArray[7]} id="188"/>
            <DropBox key={"189"} divideVal={tempArray[8]} id="189"/>
            <DropBox key={"190"} divideVal={tempArray[9]} id="190"/>
            &nbsp;
            &nbsp;
            <DropBox key={"191"} divideVal={tempArray[10]} id="191"/>
            <DropBox key={"192"} divideVal={tempArray[11]} id="192"/>
            <DropBox key={"193"} divideVal={tempArray[12]} id="193"/>
            <DropBox key={"194"} divideVal={tempArray[13]} id="194"/>
            <DropBox key={"195"} divideVal={tempArray[14]} id="195"/>
            <DropBox key={"196"} divideVal={tempArray[15]} id="196"/>
            <DropBox key={"197"} divideVal={tempArray[16]} id="197"/>
            <DropBox key={"198"} divideVal={tempArray[17]} id="198"/>
            <DropBox key={"199"} divideVal={tempArray[18]} id="199"/>
            <DropBox key={"200"} divideVal={tempArray[19]} id="200"/>
            <DropBox key={"181"} divideVal={tempArray[0]} id="181"/>
            <DropBox key={"182"} divideVal={tempArray[1]} id="182"/>
            <DropBox key={"183"} divideVal={tempArray[2]} id="183"/>
            <DropBox key={"184"} divideVal={tempArray[3]} id="184"/>
            <DropBox key={"185"} divideVal={tempArray[4]} id="185"/> 
            <DropBox key={"186"} divideVal={tempArray[5]} id="186"/>
            <DropBox key={"187"} divideVal={tempArray[6]} id="187"/>
            <DropBox key={"188"} divideVal={tempArray[7]} id="188"/>
            <DropBox key={"189"} divideVal={tempArray[8]} id="189"/>
            <DropBox key={"190"} divideVal={tempArray[9]} id="190"/>
            <DropBox key={"186"} divideVal={tempArray[5]} id="186"/>
            <DropBox key={"187"} divideVal={tempArray[6]} id="187"/>
            <DropBox key={"188"} divideVal={tempArray[7]} id="188"/>
            <DropBox key={"189"} divideVal={tempArray[8]} id="189"/>
            <DropBox key={"190"} divideVal={tempArray[9]} id="190"/>
            </tr>
        , document.getElementById("stepTen"))}
        {setTempArray([...array])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"181"} divideVal={tempArray[0]} id="181"/>
            <DropBox key={"182"} divideVal={tempArray[1]} id="182"/>
            <DropBox key={"183"} divideVal={tempArray[2]} id="183"/>
            <DropBox key={"184"} divideVal={tempArray[3]} id="184"/>
            <DropBox key={"185"} divideVal={tempArray[4]} id="185"/> 
            <DropBox key={"186"} divideVal={tempArray[5]} id="186"/>
            <DropBox key={"187"} divideVal={tempArray[6]} id="187"/>
            <DropBox key={"188"} divideVal={tempArray[7]} id="188"/>
            <DropBox key={"189"} divideVal={tempArray[8]} id="189"/>
            <DropBox key={"190"} divideVal={tempArray[9]} id="190"/>
            <DropBox key={"191"} divideVal={tempArray[10]} id="191"/>
            <DropBox key={"192"} divideVal={tempArray[11]} id="192"/>
            <DropBox key={"193"} divideVal={tempArray[12]} id="193"/>
            <DropBox key={"194"} divideVal={tempArray[13]} id="194"/>
            <DropBox key={"195"} divideVal={tempArray[14]} id="195"/>
            <DropBox key={"196"} divideVal={tempArray[15]} id="196"/>
            <DropBox key={"197"} divideVal={tempArray[16]} id="197"/>
            <DropBox key={"198"} divideVal={tempArray[17]} id="198"/>
            <DropBox key={"199"} divideVal={tempArray[18]} id="199"/>
            <DropBox key={"200"} divideVal={tempArray[19]} id="200"/>
            <DropBox key={"181"} divideVal={tempArray[0]} id="181"/>
            <DropBox key={"182"} divideVal={tempArray[1]} id="182"/>
            <DropBox key={"183"} divideVal={tempArray[2]} id="183"/>
            <DropBox key={"184"} divideVal={tempArray[3]} id="184"/>
            <DropBox key={"185"} divideVal={tempArray[4]} id="185"/> 
            <DropBox key={"186"} divideVal={tempArray[5]} id="186"/>
            <DropBox key={"187"} divideVal={tempArray[6]} id="187"/>
            <DropBox key={"188"} divideVal={tempArray[7]} id="188"/>
            <DropBox key={"189"} divideVal={tempArray[8]} id="189"/>
            <DropBox key={"190"} divideVal={tempArray[9]} id="190"/>
            <DropBox key={"191"} divideVal={tempArray[10]} id="191"/>
            <DropBox key={"192"} divideVal={tempArray[11]} id="192"/>
            <DropBox key={"193"} divideVal={tempArray[12]} id="193"/>
            <DropBox key={"194"} divideVal={tempArray[13]} id="194"/>
            <DropBox key={"195"} divideVal={tempArray[14]} id="195"/>
            <DropBox key={"196"} divideVal={tempArray[15]} id="196"/>
            <DropBox key={"197"} divideVal={tempArray[16]} id="197"/>
            <DropBox key={"198"} divideVal={tempArray[17]} id="198"/>
            <DropBox key={"199"} divideVal={tempArray[18]} id="199"/>
            <DropBox key={"200"} divideVal={tempArray[19]} id="200"/>
            <DropBox key={"181"} divideVal={tempArray[0]} id="181"/>
            <DropBox key={"182"} divideVal={tempArray[1]} id="182"/>
            <DropBox key={"183"} divideVal={tempArray[2]} id="183"/>
            <DropBox key={"184"} divideVal={tempArray[3]} id="184"/>
            <DropBox key={"185"} divideVal={tempArray[4]} id="185"/> 
            <DropBox key={"186"} divideVal={tempArray[5]} id="186"/>
            <DropBox key={"187"} divideVal={tempArray[6]} id="187"/>
            <DropBox key={"188"} divideVal={tempArray[7]} id="188"/>
            <DropBox key={"189"} divideVal={tempArray[8]} id="189"/>
            <DropBox key={"190"} divideVal={tempArray[9]} id="190"/>
            </tr>
        , document.getElementById("stepEleven"))}
        </tbody>
        </table>
        <p id="feedback"></p>
        <button id="nextBtn" onClick={()=> {ReactDOM.render(<></>, document.getElementById("allSteps")); ReactDOM.render(<LevelFive/>, document.getElementById("root"))}}>Next Level</button>
        </div>
    )
}

export default LevelFive;