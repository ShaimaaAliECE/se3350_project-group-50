import makeArray from "../makeRandomArray";
import Numbers from "../Numbers";
import DropBox from "../DropBox";
import FuilurePageMenu from "../FailurePageMenu";
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import { mergeSort } from "../../App";
import $ from "jquery";
import { MergeSortMenu, changeLevel } from "../../App";
import axios from "axios";

function LevelFive(){
    const currentLevel = 5;
    changeLevel(5)
    
    const[array, setArray] = useState(makeArray(50, 1, 100))
    let tempArray = [];
    let tempArray2 = [];
    let tempArray3 = [];
    let tempArray4 = [];
    let tempArray5 = [];
    let tempArray6 = [];
    let tempArray7 = [];
    let tempArray8 = [];
    let tempArray9 = [];
    let tempArray10 = [];
    let tempArray11 = [];
    let tempArray12 = [];
    let tempArray13 = [];
    let tempArray14 = [];
    let tempArray15 = [];
    let tempArray16 = [];
    let tempArray17 = [];
    let tempArray18 = [];
    let tempArray19 = [];
    let tempArray20 = [];

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
        $("#stepEleven").hide()
        $("#stepTwelve").hide()
        $("#nextBtn").hide()
    }, []) 
    
    function setTempArray(changeToArray){
        array = mergeSort(changeToArray);
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
    function setTempArray9(changeToArray){
        tempArray9=mergeSort(changeToArray)
    }
    function setTempArray10(changeToArray){
        tempArray10=mergeSort(changeToArray)
    }
    function setTempArray11(changeToArray){
        tempArray11=mergeSort(changeToArray)
    }
    function setTempArray12(changeToArray){
        tempArray12=mergeSort(changeToArray)
    }
    function setTempArray13(changeToArray){
        tempArray13=mergeSort(changeToArray)
    }
    function setTempArray14(changeToArray){
        tempArray14=mergeSort(changeToArray)
    }
    function setTempArray15(changeToArray){
        tempArray15=mergeSort(changeToArray)
    }
    function setTempArray16(changeToArray){
        tempArray16=mergeSort(changeToArray)
    }
    function setTempArray17(changeToArray){
        tempArray17=mergeSort(changeToArray)
    }
    function setTempArray18(changeToArray){
        tempArray18=mergeSort(changeToArray)
    }
    function setTempArray19(changeToArray){
        tempArray19=mergeSort(changeToArray)
    }
    function setTempArray20(changeToArray){
        tempArray20=mergeSort(changeToArray)
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
            <DropBox key={"11"} divideVal={array[10]} id="11"/>
            <DropBox key={"12"} divideVal={array[11]} id="12"/>
            <DropBox key={"13"} divideVal={array[12]} id="13"/>
            <DropBox key={"14"} divideVal={array[13]} id="14"/>
            <DropBox key={"15"} divideVal={array[14]} id="15"/>
            <DropBox key={"16"} divideVal={array[15]} id="16"/>
            <DropBox key={"17"} divideVal={array[16]} id="17"/>
            <DropBox key={"18"} divideVal={array[17]} id="18"/>
            <DropBox key={"19"} divideVal={array[18]} id="19"/>
            <DropBox key={"20"} divideVal={array[19]} id="20"/>
            <DropBox key={"21"} divideVal={array[20]} id="21"/>
            <DropBox key={"22"} divideVal={array[21]} id="22"/>
            <DropBox key={"23"} divideVal={array[22]} id="23"/>
            <DropBox key={"24"} divideVal={array[23]} id="24"/>
            <DropBox key={"25"} divideVal={array[24]} id="25"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"26"} divideVal={array[25]} id="26"/>
            <DropBox key={"27"} divideVal={array[26]} id="27"/>
            <DropBox key={"28"} divideVal={array[27]} id="28"/>
            <DropBox key={"29"} divideVal={array[28]} id="29"/>
            <DropBox key={"30"} divideVal={array[29]} id="30"/>
            <DropBox key={"31"} divideVal={array[30]} id="31"/>
            <DropBox key={"32"} divideVal={array[31]} id="32"/>
            <DropBox key={"33"} divideVal={array[32]} id="33"/>
            <DropBox key={"34"} divideVal={array[33]} id="34"/>
            <DropBox key={"35"} divideVal={array[34]} id="35"/>
            <DropBox key={"36"} divideVal={array[35]} id="36"/>
            <DropBox key={"37"} divideVal={array[36]} id="37"/>
            <DropBox key={"38"} divideVal={array[37]} id="38"/>
            <DropBox key={"39"} divideVal={array[38]} id="39"/>
            <DropBox key={"40"} divideVal={array[39]} id="40"/>
            <DropBox key={"41"} divideVal={array[40]} id="41"/>
            <DropBox key={"42"} divideVal={array[41]} id="42"/>
            <DropBox key={"43"} divideVal={array[42]} id="43"/>
            <DropBox key={"44"} divideVal={array[43]} id="44"/>
            <DropBox key={"45"} divideVal={array[44]} id="45"/>
            <DropBox key={"46"} divideVal={array[45]} id="46"/>
            <DropBox key={"47"} divideVal={array[46]} id="47"/>
            <DropBox key={"48"} divideVal={array[47]} id="48"/>
            <DropBox key={"49"} divideVal={array[48]} id="49"/>
            <DropBox key={"50"} divideVal={array[49]} id="50"/>
            </tr>
        , document.getElementById("stepOne"))}
        {
        ReactDOM.render(<tr>
            <DropBox key={"51"} divideVal={array[0]} id="51"/>
            <DropBox key={"52"} divideVal={array[1]} id="52"/>
            <DropBox key={"53"} divideVal={array[2]} id="53"/>
            <DropBox key={"54"} divideVal={array[3]} id="54"/>
            <DropBox key={"55"} divideVal={array[4]} id="55"/>
            <DropBox key={"56"} divideVal={array[5]} id="56"/>
            <DropBox key={"57"} divideVal={array[6]} id="57"/>
            <DropBox key={"58"} divideVal={array[7]} id="58"/>
            <DropBox key={"59"} divideVal={array[8]} id="59"/>
            <DropBox key={"60"} divideVal={array[9]} id="60"/>
            &nbsp;
            &nbsp;
            <DropBox key={"61"} divideVal={array[10]} id="61"/>
            <DropBox key={"62"} divideVal={array[11]} id="62"/>
            <DropBox key={"63"} divideVal={array[12]} id="63"/>
            <DropBox key={"64"} divideVal={array[13]} id="64"/>
            <DropBox key={"65"} divideVal={array[14]} id="65"/>
            <DropBox key={"66"} divideVal={array[15]} id="66"/>
            <DropBox key={"67"} divideVal={array[16]} id="67"/>
            <DropBox key={"68"} divideVal={array[17]} id="68"/>
            <DropBox key={"69"} divideVal={array[18]} id="69"/>
            <DropBox key={"70"} divideVal={array[19]} id="70"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"71"} divideVal={array[20]} id="71"/>
            <DropBox key={"72"} divideVal={array[21]} id="72"/>
            <DropBox key={"73"} divideVal={array[22]} id="73"/>
            <DropBox key={"74"} divideVal={array[23]} id="74"/>
            <DropBox key={"75"} divideVal={array[24]} id="75"/>
            <DropBox key={"76"} divideVal={array[25]} id="76"/>
            <DropBox key={"77"} divideVal={array[26]} id="77"/>
            <DropBox key={"78"} divideVal={array[27]} id="78"/>
            <DropBox key={"79"} divideVal={array[28]} id="79"/>
            <DropBox key={"80"} divideVal={array[29]} id="80"/>
            &nbsp;
            &nbsp;
            <DropBox key={"81"} divideVal={array[31]} id="81"/>
            <DropBox key={"82"} divideVal={array[32]} id="82"/> 
            <DropBox key={"83"} divideVal={array[33]} id="83"/>
            <DropBox key={"84"} divideVal={array[34]} id="84"/>
            <DropBox key={"85"} divideVal={array[35]} id="85"/>
            <DropBox key={"86"} divideVal={array[36]} id="86"/>
            <DropBox key={"87"} divideVal={array[37]} id="87"/>
            <DropBox key={"88"} divideVal={array[38]} id="88"/>
            <DropBox key={"89"} divideVal={array[39]} id="89"/>
            <DropBox key={"90"} divideVal={array[40]} id="90"/>
            &nbsp;
            &nbsp;
            <DropBox key={"91"} divideVal={array[41]} id="91"/>
            <DropBox key={"92"} divideVal={array[42]} id="92"/> 
            <DropBox key={"93"} divideVal={array[43]} id="93"/>
            <DropBox key={"94"} divideVal={array[44]} id="94"/>
            <DropBox key={"95"} divideVal={array[45]} id="95"/>
            <DropBox key={"96"} divideVal={array[46]} id="96"/>
            <DropBox key={"97"} divideVal={array[47]} id="97"/>
            <DropBox key={"98"} divideVal={array[48]} id="98"/>
            <DropBox key={"99"} divideVal={array[49]} id="99"/>
            <DropBox key={"100"} divideVal={array[50]} id="100"/>
            </tr>, document.getElementById("stepTwo"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"101"} divideVal={array[0]} id="101"/>
            <DropBox key={"102"} divideVal={array[1]} id="102"/>
            <DropBox key={"103"} divideVal={array[2]} id="103"/>
            <DropBox key={"104"} divideVal={array[3]} id="104"/>
            <DropBox key={"105"} divideVal={array[4]} id="105"/>  
            &nbsp;
            &nbsp;
            <DropBox key={"106"} divideVal={array[5]} id="106"/>
            <DropBox key={"107"} divideVal={array[6]} id="107"/>
            <DropBox key={"108"} divideVal={array[7]} id="108"/>
            <DropBox key={"109"} divideVal={array[8]} id="109"/>  
            <DropBox key={"110"} divideVal={array[9]} id="110"/> 
            &nbsp;
            &nbsp;         
            <DropBox key={"111"} divideVal={array[10]} id="111"/>
            <DropBox key={"112"} divideVal={array[11]} id="112"/>
            <DropBox key={"113"} divideVal={array[12]} id="113"/>
            <DropBox key={"114"} divideVal={array[13]} id="114"/>
            <DropBox key={"115"} divideVal={array[14]} id="115"/>
            &nbsp;
            &nbsp;
            <DropBox key={"116"} divideVal={array[15]} id="116"/>
            <DropBox key={"117"} divideVal={array[16]} id="117"/>
            <DropBox key={"118"} divideVal={array[17]} id="118"/>
            <DropBox key={"119"} divideVal={array[18]} id="119"/>  
            <DropBox key={"120"} divideVal={array[19]} id="120"/>
            &nbsp;
            &nbsp;
            <DropBox key={"121"} divideVal={array[20]} id="121"/>
            <DropBox key={"122"} divideVal={array[21]} id="122"/>  
            <DropBox key={"123"} divideVal={array[22]} id="123"/>
            <DropBox key={"124"} divideVal={array[23]} id="124"/> 
            <DropBox key={"125"} divideVal={array[24]} id="125"/>
            &nbsp;
            &nbsp;
            <DropBox key={"126"} divideVal={array[25]} id="126"/> 
            <DropBox key={"127"} divideVal={array[26]} id="127"/>
            <DropBox key={"128"} divideVal={array[27]} id="128"/>
            <DropBox key={"129"} divideVal={array[28]} id="129"/>  
            <DropBox key={"130"} divideVal={array[29]} id="130"/>
            &nbsp;
            &nbsp;
            <DropBox key={"131"} divideVal={array[30]} id="131"/>
            <DropBox key={"132"} divideVal={array[31]} id="132"/>
            <DropBox key={"133"} divideVal={array[32]} id="133"/>
            <DropBox key={"134"} divideVal={array[33]} id="134"/>
            <DropBox key={"135"} divideVal={array[34]} id="135"/>
            &nbsp;
            &nbsp;
            <DropBox key={"136"} divideVal={array[35]} id="136"/>
            <DropBox key={"137"} divideVal={array[36]} id="137"/>
            <DropBox key={"138"} divideVal={array[37]} id="138"/>
            <DropBox key={"139"} divideVal={array[38]} id="139"/>  
            <DropBox key={"140"} divideVal={array[39]} id="140"/>
            &nbsp;
            &nbsp;
            <DropBox key={"141"} divideVal={array[40]} id="141"/>
            <DropBox key={"142"} divideVal={array[41]} id="142"/>
            <DropBox key={"143"} divideVal={array[42]} id="143"/>
            <DropBox key={"144"} divideVal={array[43]} id="144"/>  
            <DropBox key={"145"} divideVal={array[44]} id="145"/>
            &nbsp;
            &nbsp;
            <DropBox key={"146"} divideVal={array[45]} id="146"/>
            <DropBox key={"147"} divideVal={array[46]} id="147"/>
            <DropBox key={"148"} divideVal={array[47]} id="148"/>
            <DropBox key={"149"} divideVal={array[48]} id="149"/>  
            <DropBox key={"150"} divideVal={array[49]} id="150"/>
            </tr>, document.getElementById("stepThree"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"151"} divideVal={array[0]} id="151"/>
            <DropBox key={"152"} divideVal={array[1]} id="152"/>
            <DropBox key={"153"} divideVal={array[2]} id="153"/>
            &nbsp;
            &nbsp;
            <DropBox key={"154"} divideVal={array[3]} id="154"/>
            <DropBox key={"155"} divideVal={array[4]} id="155"/>
            &nbsp;
            &nbsp;
            <DropBox key={"156"} divideVal={array[5]} id="156"/> 
            <DropBox key={"157"} divideVal={array[6]} id="157"/>
            <DropBox key={"158"} divideVal={array[7]} id="158"/>
            &nbsp;
            &nbsp;
            <DropBox key={"159"} divideVal={array[8]} id="159"/>
            <DropBox key={"160"} divideVal={array[9]} id="160"/>
            &nbsp;
            &nbsp;
            <DropBox key={"161"} divideVal={array[10]} id="161"/>
            <DropBox key={"162"} divideVal={array[11]} id="162"/>
            <DropBox key={"163"} divideVal={array[12]} id="163"/>
            &nbsp;
            &nbsp;
            <DropBox key={"164"} divideVal={array[13]} id="164"/>
            <DropBox key={"165"} divideVal={array[14]} id="165"/>
            &nbsp;
            &nbsp;
            <DropBox key={"166"} divideVal={array[15]} id="166"/>
            <DropBox key={"167"} divideVal={array[16]} id="167"/>
            <DropBox key={"168"} divideVal={array[17]} id="168"/>
            &nbsp;
            &nbsp;
            <DropBox key={"169"} divideVal={array[18]} id="169"/>
            <DropBox key={"170"} divideVal={array[19]} id="170"/>
            &nbsp;
            &nbsp;
            <DropBox key={"171"} divideVal={array[20]} id="171"/> 
            <DropBox key={"172"} divideVal={array[21]} id="172"/>
            <DropBox key={"173"} divideVal={array[22]} id="173"/>
            &nbsp;
            &nbsp;
            <DropBox key={"174"} divideVal={array[23]} id="174"/>
            <DropBox key={"175"} divideVal={array[24]} id="175"/>
            &nbsp;
            &nbsp;
            <DropBox key={"176"} divideVal={array[25]} id="176"/>
            <DropBox key={"177"} divideVal={array[26]} id="177"/>
            <DropBox key={"178"} divideVal={array[27]} id="178"/>
            &nbsp;
            &nbsp;
            <DropBox key={"179"} divideVal={array[28]} id="179"/>
            <DropBox key={"180"} divideVal={array[29]} id="180"/>
            &nbsp;
            &nbsp;
            <DropBox key={"181"} divideVal={array[30]} id="181"/>
            <DropBox key={"182"} divideVal={array[31]} id="182"/>
            <DropBox key={"183"} divideVal={array[32]} id="183"/>
            &nbsp;
            &nbsp;
            <DropBox key={"184"} divideVal={array[33]} id="184"/>
            <DropBox key={"185"} divideVal={array[34]} id="185"/>
            &nbsp;
            &nbsp;
            <DropBox key={"186"} divideVal={array[35]} id="186"/>
            <DropBox key={"187"} divideVal={array[36]} id="187"/>
            <DropBox key={"188"} divideVal={array[37]} id="188"/>
            &nbsp;
            &nbsp;
            <DropBox key={"189"} divideVal={array[38]} id="189"/>
            <DropBox key={"190"} divideVal={array[39]} id="190"/>
            &nbsp;
            &nbsp;
            <DropBox key={"191"} divideVal={array[40]} id="191"/>
            <DropBox key={"192"} divideVal={array[41]} id="192"/>
            <DropBox key={"193"} divideVal={array[42]} id="193"/>
            &nbsp;
            &nbsp;
            <DropBox key={"194"} divideVal={array[43]} id="194"/>
            <DropBox key={"195"} divideVal={array[44]} id="195"/>
            &nbsp;
            &nbsp;
            <DropBox key={"196"} divideVal={array[45]} id="196"/>
            <DropBox key={"197"} divideVal={array[46]} id="197"/>
            <DropBox key={"198"} divideVal={array[47]} id="198"/>
            &nbsp;
            &nbsp;
            <DropBox key={"199"} divideVal={array[48]} id="199"/>
            <DropBox key={"200"} divideVal={array[49]} id="200"/>
            </tr>, document.getElementById("stepFour"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"201"} divideVal={array[0]} id="201"/>
            <DropBox key={"202"} divideVal={array[1]} id="202"/>
            &nbsp;
            &nbsp;
            <DropBox key={"203"} divideVal={array[2]} id="203"/>
            &nbsp;
            &nbsp;
            <DropBox key={"204"} divideVal={array[3]} id="204"/>
            &nbsp;
            &nbsp;
            <DropBox key={"205"} divideVal={array[4]} id="205"/>
            &nbsp;
            &nbsp;
            <DropBox key={"206"} divideVal={array[5]} id="206"/>
            <DropBox key={"207"} divideVal={array[6]} id="207"/>
            &nbsp;
            &nbsp;
            <DropBox key={"208"} divideVal={array[7]} id="208"/>
            &nbsp;
            &nbsp;
            <DropBox key={"209"} divideVal={array[8]} id="209"/>
            &nbsp;
            &nbsp;
            <DropBox key={"210"} divideVal={array[9]} id="210"/>
            &nbsp;
            &nbsp;
            <DropBox key={"211"} divideVal={array[10]} id="211"/>
            <DropBox key={"212"} divideVal={array[11]} id="212"/>
            &nbsp;
            &nbsp;
            <DropBox key={"213"} divideVal={array[12]} id="213"/>
            &nbsp;
            &nbsp;
            <DropBox key={"214"} divideVal={array[13]} id="214"/>
            &nbsp;
            &nbsp;
            <DropBox key={"215"} divideVal={array[14]} id="215"/>
            &nbsp;
            &nbsp;
            <DropBox key={"216"} divideVal={array[15]} id="216"/>
            <DropBox key={"217"} divideVal={array[16]} id="217"/>
            &nbsp;
            &nbsp;
            <DropBox key={"218"} divideVal={array[17]} id="218"/>
            &nbsp;
            &nbsp;
            <DropBox key={"219"} divideVal={array[18]} id="219"/>
            &nbsp;
            &nbsp;
            <DropBox key={"220"} divideVal={array[19]} id="220"/>
            &nbsp;
            &nbsp;
            <DropBox key={"221"} divideVal={array[20]} id="221"/>
            <DropBox key={"222"} divideVal={array[21]} id="222"/>
            &nbsp;
            &nbsp;
            <DropBox key={"223"} divideVal={array[22]} id="223"/>
            &nbsp;
            &nbsp;
            <DropBox key={"224"} divideVal={array[23]} id="224"/>
            &nbsp;
            &nbsp;
            <DropBox key={"225"} divideVal={array[24]} id="225"/>
            &nbsp;
            &nbsp;
            <DropBox key={"226"} divideVal={array[25]} id="226"/>
            <DropBox key={"227"} divideVal={array[26]} id="227"/>
            &nbsp;
            &nbsp;
            <DropBox key={"228"} divideVal={array[27]} id="228"/>
            &nbsp;
            &nbsp;
            <DropBox key={"229"} divideVal={array[28]} id="229"/>
            &nbsp;
            &nbsp;
            <DropBox key={"230"} divideVal={array[29]} id="230"/>
            &nbsp;
            &nbsp;
            <DropBox key={"231"} divideVal={array[30]} id="231"/>
            <DropBox key={"232"} divideVal={array[31]} id="232"/>
            &nbsp;
            &nbsp;
            <DropBox key={"233"} divideVal={array[32]} id="233"/>
            &nbsp;
            &nbsp;
            <DropBox key={"234"} divideVal={array[33]} id="234"/>
            &nbsp;
            &nbsp;
            <DropBox key={"235"} divideVal={array[34]} id="235"/>
            &nbsp;
            &nbsp;
            <DropBox key={"236"} divideVal={array[35]} id="236"/>
            <DropBox key={"237"} divideVal={array[36]} id="237"/>
            &nbsp;
            &nbsp;
            <DropBox key={"238"} divideVal={array[37]} id="238"/>
            &nbsp;
            &nbsp;
            <DropBox key={"239"} divideVal={array[38]} id="239"/>
            &nbsp;
            &nbsp;
            <DropBox key={"240"} divideVal={array[39]} id="240"/>
            &nbsp;
            &nbsp;
            <DropBox key={"241"} divideVal={array[40]} id="241"/>
            <DropBox key={"242"} divideVal={array[41]} id="242"/>
            &nbsp;
            &nbsp;
            <DropBox key={"243"} divideVal={array[42]} id="243"/>
            &nbsp;
            &nbsp;
            <DropBox key={"244"} divideVal={array[43]} id="244"/>
            &nbsp;
            &nbsp;
            <DropBox key={"245"} divideVal={array[44]} id="245"/>
            &nbsp;
            &nbsp;
            <DropBox key={"246"} divideVal={array[45]} id="246"/>
            <DropBox key={"247"} divideVal={array[46]} id="247"/>
            &nbsp;
            &nbsp;
            <DropBox key={"248"} divideVal={array[47]} id="248"/>
            &nbsp;
            &nbsp;
            <DropBox key={"249"} divideVal={array[48]} id="249"/>
            &nbsp;
            &nbsp;
            <DropBox key={"250"} divideVal={array[49]} id="250"/>
            </tr>, document.getElementById("stepFive"))
        }
        {
            ReactDOM.render(<tr>
            <DropBox key={"251"} divideVal={array[0]} id="251"/>
            &nbsp;
            &nbsp;
            <DropBox key={"252"} divideVal={array[1]} id="252"/> 
            &nbsp;
            &nbsp;          
            <DropBox key={"253"} divideVal={array[2]} id="253"/>
            &nbsp;
            &nbsp;
            <DropBox key={"254"} divideVal={array[3]} id="254"/>
            &nbsp;
            &nbsp;
            <DropBox key={"255"} divideVal={array[4]} id="255"/>
            &nbsp;
            &nbsp;
            <DropBox key={"256"} divideVal={array[5]} id="256"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"257"} divideVal={array[6]} id="257"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"258"} divideVal={array[7]} id="258"/>
            &nbsp;
            &nbsp;
            <DropBox key={"259"} divideVal={array[8]} id="259"/>
            &nbsp;
            &nbsp;
            <DropBox key={"260"} divideVal={array[9]} id="260"/>
            &nbsp;
            &nbsp;
            <DropBox key={"261"} divideVal={array[10]} id="261"/>
            &nbsp;
            &nbsp;
            <DropBox key={"262"} divideVal={array[11]} id="262"/>
            &nbsp;
            &nbsp;
            <DropBox key={"263"} divideVal={array[12]} id="263"/>
            &nbsp;
            &nbsp;
            <DropBox key={"264"} divideVal={array[13]} id="264"/>
            &nbsp;
            &nbsp;
            <DropBox key={"265"} divideVal={array[14]} id="265"/>
            &nbsp;
            &nbsp;
            <DropBox key={"266"} divideVal={array[15]} id="266"/>
            &nbsp;
            &nbsp;
            <DropBox key={"267"} divideVal={array[16]} id="267"/>
            &nbsp;
            &nbsp;
            <DropBox key={"268"} divideVal={array[17]} id="268"/>
            &nbsp;
            &nbsp;
            <DropBox key={"269"} divideVal={array[18]} id="269"/>
            &nbsp;
            &nbsp;
            <DropBox key={"270"} divideVal={array[19]} id="270"/>
            &nbsp;
            &nbsp;
            <DropBox key={"271"} divideVal={array[20]} id="271"/>
            &nbsp;
            &nbsp;
            <DropBox key={"272"} divideVal={array[21]} id="272"/> 
            &nbsp;
            &nbsp;          
            <DropBox key={"273"} divideVal={array[22]} id="273"/>
            &nbsp;
            &nbsp;
            <DropBox key={"274"} divideVal={array[23]} id="274"/>
            &nbsp;
            &nbsp;
            <DropBox key={"275"} divideVal={array[24]} id="275"/>
            &nbsp;
            &nbsp;
            <DropBox key={"276"} divideVal={array[25]} id="276"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"277"} divideVal={array[26]} id="277"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"278"} divideVal={array[27]} id="278"/>
            &nbsp;
            &nbsp;
            <DropBox key={"279"} divideVal={array[28]} id="279"/>
            &nbsp;
            &nbsp;
            <DropBox key={"280"} divideVal={array[29]} id="280"/>
            &nbsp;
            &nbsp;
            <DropBox key={"281"} divideVal={array[30]} id="281"/>
            &nbsp;
            &nbsp;
            <DropBox key={"282"} divideVal={array[31]} id="282"/>
            &nbsp;
            &nbsp;
            <DropBox key={"283"} divideVal={array[32]} id="283"/>
            &nbsp;
            &nbsp;
            <DropBox key={"284"} divideVal={array[33]} id="284"/>
            &nbsp;
            &nbsp;
            <DropBox key={"285"} divideVal={array[34]} id="285"/>
            &nbsp;
            &nbsp;
            <DropBox key={"286"} divideVal={array[35]} id="286"/>
            &nbsp;
            &nbsp;
            <DropBox key={"287"} divideVal={array[36]} id="287"/>
            &nbsp;
            &nbsp;
            <DropBox key={"288"} divideVal={array[37]} id="288"/>
            &nbsp;
            &nbsp;
            <DropBox key={"289"} divideVal={array[38]} id="289"/>
            &nbsp;
            &nbsp;
            <DropBox key={"290"} divideVal={array[39]} id="290"/>
            &nbsp;
            &nbsp;
            <DropBox key={"291"} divideVal={array[40]} id="291"/>
            &nbsp;
            &nbsp;
            <DropBox key={"292"} divideVal={array[41]} id="292"/>
            &nbsp;
            &nbsp;
            <DropBox key={"293"} divideVal={array[42]} id="293"/>
            &nbsp;
            &nbsp;
            <DropBox key={"294"} divideVal={array[43]} id="294"/>
            &nbsp;
            &nbsp;
            <DropBox key={"295"} divideVal={array[44]} id="295"/>
            &nbsp;
            &nbsp;
            <DropBox key={"296"} divideVal={array[45]} id="296"/>
            &nbsp;
            &nbsp;
            <DropBox key={"297"} divideVal={array[46]} id="297"/>
            &nbsp;
            &nbsp;
            <DropBox key={"298"} divideVal={array[47]} id="298"/>
            &nbsp;
            &nbsp;
            <DropBox key={"299"} divideVal={array[48]} id="299"/>
            &nbsp;
            &nbsp;
            <DropBox key={"300"} divideVal={array[49]} id="300"/>
            </tr>, document.getElementById("stepSix"))
        }
        {setTempArray([array[0], array[1]])}
        {setTempArray2([array[5], array[6]])}
        {setTempArray3([array[10], array[11]])}
        {setTempArray4([array[15], array[16]])}
        {setTempArray5([array[20], array[21]])}
        {setTempArray6([array[25], array[26]])}
        {setTempArray7([array[30], array[31]])}
        {setTempArray8([array[35], array[36]])}
        {setTempArray9([array[40], array[41]])}
        {setTempArray10([array[45, array[46]]])}
        {
        ReactDOM.render(<tr>
            <DropBox key={"301"} divideVal={tempArray[0]} id="301"/>
            <DropBox key={"302"} divideVal={tempArray[1]} id="302"/>
            &nbsp;
            &nbsp;
            <DropBox key={"303"} divideVal={array[2]} id="303"/>
            &nbsp;
            &nbsp;
            <DropBox key={"304"} divideVal={array[3]} id="304"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"305"} divideVal={array[4]} id="305"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"306"} divideVal={tempArray2[0]} id="306"/>
            <DropBox key={"307"} divideVal={tempArray2[1]} id="307"/>
            &nbsp;
            &nbsp;
            <DropBox key={"308"} divideVal={array[7]} id="308"/>
            &nbsp;
            &nbsp;
            <DropBox key={"309"} divideVal={array[8]} id="309"/>
            &nbsp;
            &nbsp;
            <DropBox key={"310"} divideVal={array[9]} id="310"/>
            &nbsp;
            &nbsp;
            <DropBox key={"311"} divideVal={tempArray3[0]} id="311"/>
            <DropBox key={"312"} divideVal={tempArray3[1]} id="312"/>
            &nbsp;
            &nbsp;
            <DropBox key={"313"} divideVal={array[12]} id="313"/>
            &nbsp;
            &nbsp;
            <DropBox key={"314"} divideVal={array[13]} id="314"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"315"} divideVal={array[14]} id="315"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"316"} divideVal={tempArray4[0]} id="316"/>
            <DropBox key={"317"} divideVal={tempArray4[1]} id="317"/>
            &nbsp;
            &nbsp;
            <DropBox key={"318"} divideVal={array[17]} id="318"/>
            &nbsp;
            &nbsp;
            <DropBox key={"319"} divideVal={array[18]} id="319"/>
            &nbsp;
            &nbsp;
            <DropBox key={"320"} divideVal={array[19]} id="320"/>
            &nbsp;
            &nbsp;
            <DropBox key={"321"} divideVal={tempArray5[0]} id="321"/>
            <DropBox key={"322"} divideVal={tempArray5[1]} id="322"/>
            &nbsp;
            &nbsp;
            <DropBox key={"323"} divideVal={array[22]} id="323"/>
            &nbsp;
            &nbsp;
            <DropBox key={"324"} divideVal={array[23]} id="324"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"325"} divideVal={array[24]} id="325"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"326"} divideVal={tempArray6[0]} id="326"/>
            <DropBox key={"327"} divideVal={tempArray6[1]} id="327"/>
            &nbsp;
            &nbsp;
            <DropBox key={"328"} divideVal={array[27]} id="328"/>
            &nbsp;
            &nbsp;
            <DropBox key={"329"} divideVal={array[28]} id="329"/>
            &nbsp;
            &nbsp;
            <DropBox key={"330"} divideVal={array[29]} id="330"/>
            &nbsp;
            &nbsp;
            <DropBox key={"331"} divideVal={tempArray7[0]} id="331"/>
            <DropBox key={"332"} divideVal={tempArray7[1]} id="332"/>
            &nbsp;
            &nbsp;
            <DropBox key={"333"} divideVal={array[32]} id="333"/>
            &nbsp;
            &nbsp;
            <DropBox key={"334"} divideVal={array[33]} id="334"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"335"} divideVal={array[34]} id="335"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"336"} divideVal={tempArray8[0]} id="336"/>
            <DropBox key={"337"} divideVal={tempArray8[1]} id="337"/>
            &nbsp;
            &nbsp;
            <DropBox key={"338"} divideVal={array[37]} id="338"/>
            &nbsp;
            &nbsp;
            <DropBox key={"339"} divideVal={array[38]} id="339"/>
            &nbsp;
            &nbsp;
            <DropBox key={"340"} divideVal={array[39]} id="340"/>
            &nbsp;
            &nbsp;
            <DropBox key={"341"} divideVal={tempArray9[0]} id="341"/>
            <DropBox key={"342"} divideVal={tempArray9[1]} id="342"/>
            &nbsp;
            &nbsp;
            <DropBox key={"343"} divideVal={array[42]} id="343"/>
            &nbsp;
            &nbsp;
            <DropBox key={"344"} divideVal={array[43]} id="344"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"345"} divideVal={array[44]} id="345"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"346"} divideVal={tempArray10[0]} id="346"/>
            <DropBox key={"347"} divideVal={tempArray10[1]} id="347"/>
            &nbsp;
            &nbsp;
            <DropBox key={"348"} divideVal={array[47]} id="348"/>
            &nbsp;
            &nbsp;
            <DropBox key={"349"} divideVal={array[48]} id="349"/>
            &nbsp;
            &nbsp;
            <DropBox key={"350"} divideVal={array[49]} id="350"/>
            </tr>, document.getElementById("stepSeven"))
        }
        {setTempArray([array[0], array[1], array[2]])}
        {setTempArray2([array[3], array[4]])}
        {setTempArray3([array[5], array[6], array[7]])}
        {setTempArray4([array[8], array[9]])}
        {setTempArray5([array[10], array[11], array[12]])}
        {setTempArray6([array[13], array[14]])}
        {setTempArray7([array[15], array[16], array[17]])}
        {setTempArray8([array[18], array[19]])}
        {setTempArray9([array[20], array[21], array[22]])}
        {setTempArray10([array[23], array[24]])}
        {setTempArray11([array[25], array[26], array[27]])}
        {setTempArray12([array[28], array[29]])}
        {setTempArray13([array[30], array[31], array[32]])}
        {setTempArray14([array[33], array[34]])}
        {setTempArray15([array[35], array[36], array[37]])}
        {setTempArray16([array[38], array[39]])}
        {setTempArray17([array[40], array[41], array[42]])}
        {setTempArray18([array[43], array[44]])}
        {setTempArray19([array[45], array[46], array[47]])}
        {setTempArray20([array[48], array[49]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"351"} divideVal={tempArray[0]} id="351"/>
            <DropBox key={"352"} divideVal={tempArray[1]} id="352"/>
            <DropBox key={"353"} divideVal={tempArray[2]} id="353"/>
            &nbsp;
            &nbsp;
            <DropBox key={"354"} divideVal={tempArray2[0]} id="354"/>
            <DropBox key={"355"} divideVal={tempArray2[1]} id="355"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"356"} divideVal={tempArray3[0]} id="356"/>
            <DropBox key={"357"} divideVal={tempArray3[1]} id="357"/>
            <DropBox key={"358"} divideVal={tempArray3[2]} id="358"/>
            &nbsp;
            &nbsp;
            <DropBox key={"359"} divideVal={tempArray4[0]} id="359"/>
            <DropBox key={"360"} divideVal={tempArray4[1]} id="360"/>
            &nbsp;
            &nbsp;
            <DropBox key={"361"} divideVal={tempArray5[0]} id="361"/>
            <DropBox key={"362"} divideVal={tempArray5[1]} id="362"/>
            <DropBox key={"363"} divideVal={tempArray5[2]} id="363"/>
            &nbsp;
            &nbsp;
            <DropBox key={"364"} divideVal={tempArray6[0]} id="364"/>
            <DropBox key={"365"} divideVal={tempArray6[1]} id="365"/>
            &nbsp;
            &nbsp;
            <DropBox key={"366"} divideVal={tempArray7[0]} id="366"/>
            <DropBox key={"367"} divideVal={tempArray7[1]} id="367"/>
            <DropBox key={"368"} divideVal={tempArray7[2]} id="368"/>
            &nbsp;
            &nbsp;
            <DropBox key={"369"} divideVal={tempArray8[0]} id="369"/>
            <DropBox key={"370"} divideVal={tempArray8[1]} id="370"/>
            &nbsp;
            &nbsp;
            <DropBox key={"371"} divideVal={tempArray9[0]} id="371"/>
            <DropBox key={"372"} divideVal={tempArray9[1]} id="372"/>
            <DropBox key={"373"} divideVal={tempArray9[2]} id="373"/>
            &nbsp;
            &nbsp;
            <DropBox key={"374"} divideVal={tempArray10[0]} id="374"/>
            <DropBox key={"375"} divideVal={tempArray10[1]} id="375"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"376"} divideVal={tempArray11[0]} id="376"/>
            <DropBox key={"377"} divideVal={tempArray11[1]} id="377"/>
            <DropBox key={"378"} divideVal={tempArray11[2]} id="378"/>
            &nbsp;
            &nbsp;
            <DropBox key={"379"} divideVal={tempArray12[0]} id="379"/>
            <DropBox key={"380"} divideVal={tempArray12[1]} id="380"/>
            &nbsp;
            &nbsp;
            <DropBox key={"381"} divideVal={tempArray13[0]} id="381"/>
            <DropBox key={"382"} divideVal={tempArray13[1]} id="382"/>
            <DropBox key={"383"} divideVal={tempArray13[2]} id="383"/>
            &nbsp;
            &nbsp;
            <DropBox key={"384"} divideVal={tempArray14[0]} id="384"/>
            <DropBox key={"385"} divideVal={tempArray14[1]} id="385"/>
            &nbsp;
            &nbsp;
            <DropBox key={"386"} divideVal={tempArray15[0]} id="386"/>
            <DropBox key={"387"} divideVal={tempArray15[1]} id="387"/>
            <DropBox key={"388"} divideVal={tempArray15[2]} id="388"/>
            &nbsp;
            &nbsp;
            <DropBox key={"389"} divideVal={tempArray16[0]} id="389"/>
            <DropBox key={"390"} divideVal={tempArray16[1]} id="390"/>
            &nbsp;
            &nbsp;
            <DropBox key={"391"} divideVal={tempArray17[0]} id="391"/>
            <DropBox key={"392"} divideVal={tempArray17[1]} id="392"/>
            <DropBox key={"393"} divideVal={tempArray17[2]} id="393"/>
            &nbsp;
            &nbsp;
            <DropBox key={"394"} divideVal={tempArray18[0]} id="394"/>
            <DropBox key={"395"} divideVal={tempArray18[1]} id="395"/>
            &nbsp;
            &nbsp;
            <DropBox key={"396"} divideVal={tempArray19[0]} id="396"/>
            <DropBox key={"397"} divideVal={tempArray19[1]} id="397"/>
            <DropBox key={"398"} divideVal={tempArray19[2]} id="398"/>
            &nbsp;
            &nbsp;
            <DropBox key={"399"} divideVal={tempArray20[0]} id="399"/>
            <DropBox key={"400"} divideVal={tempArray20[1]} id="400"/>
            </tr>
        , document.getElementById("stepEight"))}
        {setTempArray([array[0], array[1], array[2], array[3], array[4]])}
        {setTempArray2([array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray3([array[10], array[11], array[12], array[13], array[14]])}
        {setTempArray4([array[15], array[16], array[17], array[18], array[19]])}
        {setTempArray5([array[20], array[21], array[22], array[23], array[24]])}
        {setTempArray6([array[25], array[26], array[27], array[28], array[29]])}
        {setTempArray7([array[30], array[31], array[32], array[33], array[34]])}
        {setTempArray8([array[35], array[36], array[37], array[38], array[39]])}
        {setTempArray9([array[40], array[41], array[42], array[43], array[44]])}
        {setTempArray10([array[45], array[46], array[47], array[48], array[49]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"401"} divideVal={tempArray[0]} id="401"/>
            <DropBox key={"402"} divideVal={tempArray[1]} id="402"/>
            <DropBox key={"403"} divideVal={tempArray[2]} id="403"/>
            <DropBox key={"404"} divideVal={tempArray[3]} id="404"/>
            <DropBox key={"405"} divideVal={tempArray[4]} id="405"/>
            &nbsp;
            &nbsp;
            <DropBox key={"406"} divideVal={tempArray2[0]} id="406"/>
            <DropBox key={"407"} divideVal={tempArray2[1]} id="407"/>
            <DropBox key={"408"} divideVal={tempArray2[2]} id="408"/>
            <DropBox key={"409"} divideVal={tempArray2[3]} id="409"/>
            <DropBox key={"410"} divideVal={tempArray2[4]} id="410"/>
            &nbsp;
            &nbsp;
            <DropBox key={"411"} divideVal={tempArray3[0]} id="411"/>
            <DropBox key={"412"} divideVal={tempArray3[1]} id="412"/>
            <DropBox key={"413"} divideVal={tempArray3[2]} id="413"/>
            <DropBox key={"414"} divideVal={tempArray3[3]} id="414"/>
            <DropBox key={"415"} divideVal={tempArray3[4]} id="415"/>
            &nbsp;
            &nbsp;
            <DropBox key={"416"} divideVal={tempArray4[0]} id="416"/>
            <DropBox key={"417"} divideVal={tempArray4[1]} id="417"/>
            <DropBox key={"418"} divideVal={tempArray4[2]} id="418"/>
            <DropBox key={"419"} divideVal={tempArray4[3]} id="419"/>
            <DropBox key={"420"} divideVal={tempArray4[4]} id="420"/>
            &nbsp;
            &nbsp;
            <DropBox key={"421"} divideVal={tempArray5[0]} id="421"/>
            <DropBox key={"422"} divideVal={tempArray5[1]} id="422"/>
            <DropBox key={"423"} divideVal={tempArray5[2]} id="423"/>
            <DropBox key={"424"} divideVal={tempArray5[3]} id="424"/>
            <DropBox key={"425"} divideVal={tempArray5[4]} id="425"/>
            &nbsp;
            &nbsp;
            <DropBox key={"426"} divideVal={tempArray6[0]} id="426"/>
            <DropBox key={"427"} divideVal={tempArray6[1]} id="427"/>
            <DropBox key={"428"} divideVal={tempArray6[2]} id="428"/>
            <DropBox key={"429"} divideVal={tempArray6[3]} id="429"/>
            <DropBox key={"430"} divideVal={tempArray6[4]} id="430"/>
            &nbsp;
            &nbsp;
            <DropBox key={"431"} divideVal={tempArray7[0]} id="431"/>
            <DropBox key={"432"} divideVal={tempArray7[1]} id="432"/>
            <DropBox key={"433"} divideVal={tempArray7[2]} id="433"/>
            <DropBox key={"434"} divideVal={tempArray7[3]} id="434"/>
            <DropBox key={"435"} divideVal={tempArray7[4]} id="435"/>
            &nbsp;
            &nbsp;
            <DropBox key={"436"} divideVal={tempArray8[0]} id="436"/>
            <DropBox key={"437"} divideVal={tempArray8[1]} id="437"/>
            <DropBox key={"438"} divideVal={tempArray8[2]} id="438"/>
            <DropBox key={"439"} divideVal={tempArray8[3]} id="439"/>
            <DropBox key={"440"} divideVal={tempArray8[4]} id="440"/>
            &nbsp;
            &nbsp;
            <DropBox key={"441"} divideVal={tempArray9[0]} id="441"/>
            <DropBox key={"442"} divideVal={tempArray9[1]} id="442"/>
            <DropBox key={"443"} divideVal={tempArray9[2]} id="443"/>
            <DropBox key={"444"} divideVal={tempArray9[3]} id="444"/>
            <DropBox key={"445"} divideVal={tempArray9[4]} id="445"/>
            &nbsp;
            &nbsp;
            <DropBox key={"446"} divideVal={tempArray10[0]} id="446"/>
            <DropBox key={"447"} divideVal={tempArray10[1]} id="447"/>
            <DropBox key={"448"} divideVal={tempArray10[2]} id="448"/>
            <DropBox key={"449"} divideVal={tempArray10[3]} id="449"/>
            <DropBox key={"450"} divideVal={tempArray10[4]} id="450"/>
            </tr>
        , document.getElementById("stepNine"))}
        {setTempArray([array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray2([array[10], array[11], array[12], array[13], array[14], array[15], array[16], array[17], array[18], array[19]])}
        {setTempArray3([array[20], array[21], array[22], array[23], array[24], array[25], array[26], array[27], array[28], array[29]])}
        {setTempArray4([array[30], array[31], array[32], array[33], array[34], array[35], array[36], array[37], array[38], array[39]])}
        {setTempArray5([array[40], array[41], array[42], array[43], array[44], array[45], array[46], array[47], array[48], array[49]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"451"} divideVal={tempArray[0]} id="451"/>
            <DropBox key={"452"} divideVal={tempArray[1]} id="452"/>
            <DropBox key={"453"} divideVal={tempArray[2]} id="453"/>
            <DropBox key={"454"} divideVal={tempArray[3]} id="454"/>
            <DropBox key={"455"} divideVal={tempArray[4]} id="455"/> 
            <DropBox key={"456"} divideVal={tempArray[5]} id="456"/>
            <DropBox key={"457"} divideVal={tempArray[6]} id="457"/>
            <DropBox key={"458"} divideVal={tempArray[7]} id="458"/>
            <DropBox key={"459"} divideVal={tempArray[8]} id="459"/>
            <DropBox key={"460"} divideVal={tempArray[9]} id="460"/>
            &nbsp;
            &nbsp;
            <DropBox key={"461"} divideVal={tempArray2[10]} id="461"/>
            <DropBox key={"462"} divideVal={tempArray2[11]} id="462"/>
            <DropBox key={"463"} divideVal={tempArray2[12]} id="463"/>
            <DropBox key={"464"} divideVal={tempArray2[13]} id="464"/>
            <DropBox key={"465"} divideVal={tempArray2[14]} id="465"/> 
            <DropBox key={"466"} divideVal={tempArray2[15]} id="466"/>
            <DropBox key={"467"} divideVal={tempArray2[16]} id="467"/>
            <DropBox key={"468"} divideVal={tempArray2[17]} id="468"/>
            <DropBox key={"469"} divideVal={tempArray2[18]} id="469"/>
            <DropBox key={"470"} divideVal={tempArray2[19]} id="470"/>
            &nbsp;
            &nbsp;
            <DropBox key={"471"} divideVal={tempArray3[20]} id="471"/>
            <DropBox key={"472"} divideVal={tempArray3[21]} id="472"/>
            <DropBox key={"473"} divideVal={tempArray3[22]} id="473"/>
            <DropBox key={"474"} divideVal={tempArray3[23]} id="474"/>
            <DropBox key={"475"} divideVal={tempArray3[24]} id="475"/>
            <DropBox key={"476"} divideVal={tempArray3[0]} id="476"/>
            <DropBox key={"477"} divideVal={tempArray3[1]} id="477"/>
            <DropBox key={"478"} divideVal={tempArray3[2]} id="478"/>
            <DropBox key={"479"} divideVal={tempArray3[3]} id="479"/>
            <DropBox key={"480"} divideVal={tempArray3[4]} id="480"/>
            &nbsp;
            &nbsp;
            <DropBox key={"481"} divideVal={tempArray4[5]} id="481"/>
            <DropBox key={"482"} divideVal={tempArray4[6]} id="482"/>
            <DropBox key={"483"} divideVal={tempArray4[7]} id="483"/>
            <DropBox key={"484"} divideVal={tempArray4[8]} id="484"/>
            <DropBox key={"485"} divideVal={tempArray4[9]} id="485"/>
            <DropBox key={"486"} divideVal={tempArray4[10]} id="486"/>
            <DropBox key={"487"} divideVal={tempArray4[11]} id="487"/>
            <DropBox key={"488"} divideVal={tempArray4[12]} id="488"/>
            <DropBox key={"489"} divideVal={tempArray4[13]} id="489"/>
            <DropBox key={"490"} divideVal={tempArray4[14]} id="490"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"491"} divideVal={tempArray5[15]} id="491"/>
            <DropBox key={"492"} divideVal={tempArray5[16]} id="492"/>
            <DropBox key={"493"} divideVal={tempArray5[17]} id="493"/>
            <DropBox key={"494"} divideVal={tempArray5[18]} id="494"/>
            <DropBox key={"495"} divideVal={tempArray5[19]} id="495"/>
            <DropBox key={"496"} divideVal={tempArray5[20]} id="496"/>
            <DropBox key={"497"} divideVal={tempArray5[21]} id="497"/>
            <DropBox key={"498"} divideVal={tempArray5[22]} id="498"/>
            <DropBox key={"499"} divideVal={tempArray5[23]} id="499"/>
            <DropBox key={"500"} divideVal={tempArray5[24]} id="500"/>
            </tr>
        , document.getElementById("stepTen"))}
        {setTempArray([array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9], array[10], array[11], array[12], array[13], array[14], array[15], array[16], array[17], array[18], array[19], array[20], array[21], array[22], array[23], array[24]])}
        {setTempArray2([array[25], array[26], array[27], array[28], array[29], array[30], array[31], array[32], array[33], array[34], array[35], array[36], array[37], array[38], array[39], array[40], array[41], array[42], array[43], array[44], array[45], array[46], array[47], array[48], array[49]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"501"} divideVal={tempArray[0]} id="501"/>
            <DropBox key={"502"} divideVal={tempArray[1]} id="502"/>
            <DropBox key={"503"} divideVal={tempArray[2]} id="503"/>
            <DropBox key={"504"} divideVal={tempArray[3]} id="504"/>
            <DropBox key={"505"} divideVal={tempArray[4]} id="505"/> 
            <DropBox key={"506"} divideVal={tempArray[5]} id="506"/>
            <DropBox key={"507"} divideVal={tempArray[6]} id="507"/>
            <DropBox key={"508"} divideVal={tempArray[7]} id="508"/>
            <DropBox key={"509"} divideVal={tempArray[8]} id="509"/>
            <DropBox key={"510"} divideVal={tempArray[9]} id="510"/>
            <DropBox key={"511"} divideVal={tempArray[10]} id="511"/>
            <DropBox key={"512"} divideVal={tempArray[11]} id="512"/>
            <DropBox key={"513"} divideVal={tempArray[12]} id="513"/>
            <DropBox key={"514"} divideVal={tempArray[13]} id="514"/>
            <DropBox key={"515"} divideVal={tempArray[14]} id="515"/>
            <DropBox key={"516"} divideVal={tempArray[15]} id="516"/>
            <DropBox key={"517"} divideVal={tempArray[16]} id="517"/>
            <DropBox key={"518"} divideVal={tempArray[17]} id="518"/>
            <DropBox key={"519"} divideVal={tempArray[18]} id="519"/>
            <DropBox key={"520"} divideVal={tempArray[19]} id="520"/>
            <DropBox key={"521"} divideVal={tempArray[20]} id="521"/>
            <DropBox key={"522"} divideVal={tempArray[21]} id="522"/>
            <DropBox key={"523"} divideVal={tempArray[22]} id="523"/>
            <DropBox key={"524"} divideVal={tempArray[23]} id="524"/>
            <DropBox key={"525"} divideVal={tempArray[24]} id="525"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"526"} divideVal={tempArray2[25]} id="526"/>
            <DropBox key={"527"} divideVal={tempArray2[26]} id="527"/>
            <DropBox key={"528"} divideVal={tempArray2[27]} id="528"/>
            <DropBox key={"529"} divideVal={tempArray2[28]} id="529"/>
            <DropBox key={"530"} divideVal={tempArray2[29]} id="530"/>
            <DropBox key={"531"} divideVal={tempArray2[30]} id="531"/>
            <DropBox key={"532"} divideVal={tempArray2[31]} id="532"/>
            <DropBox key={"533"} divideVal={tempArray2[32]} id="533"/>
            <DropBox key={"534"} divideVal={tempArray2[33]} id="534"/>
            <DropBox key={"535"} divideVal={tempArray2[34]} id="535"/>
            <DropBox key={"536"} divideVal={tempArray2[35]} id="536"/>
            <DropBox key={"537"} divideVal={tempArray2[36]} id="537"/>
            <DropBox key={"538"} divideVal={tempArray2[37]} id="538"/>
            <DropBox key={"539"} divideVal={tempArray2[38]} id="539"/>
            <DropBox key={"540"} divideVal={tempArray2[39]} id="540"/>
            <DropBox key={"541"} divideVal={tempArray2[40]} id="541"/>
            <DropBox key={"542"} divideVal={tempArray2[41]} id="542"/>
            <DropBox key={"543"} divideVal={tempArray2[42]} id="543"/>
            <DropBox key={"544"} divideVal={tempArray2[43]} id="544"/>
            <DropBox key={"545"} divideVal={tempArray2[44]} id="545"/> 
            <DropBox key={"546"} divideVal={tempArray2[45]} id="546"/>
            <DropBox key={"547"} divideVal={tempArray2[46]} id="547"/>
            <DropBox key={"548"} divideVal={tempArray2[47]} id="548"/>
            <DropBox key={"549"} divideVal={tempArray2[48]} id="549"/>
            <DropBox key={"550"} divideVal={tempArray2[49]} id="550"/>
            </tr>
        , document.getElementById("stepEleven"))}
        {setTempArray([...array])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"551"} divideVal={array[0]} id="551"/>
            <DropBox key={"552"} divideVal={array[1]} id="552"/>
            <DropBox key={"553"} divideVal={array[2]} id="553"/>
            <DropBox key={"554"} divideVal={array[3]} id="554"/>
            <DropBox key={"555"} divideVal={array[4]} id="555"/> 
            <DropBox key={"556"} divideVal={array[5]} id="556"/>
            <DropBox key={"557"} divideVal={array[6]} id="557"/>
            <DropBox key={"558"} divideVal={array[7]} id="558"/>
            <DropBox key={"559"} divideVal={array[8]} id="559"/>
            <DropBox key={"560"} divideVal={array[9]} id="560"/>
            <DropBox key={"561"} divideVal={array[10]} id="561"/>
            <DropBox key={"562"} divideVal={array[11]} id="562"/>
            <DropBox key={"563"} divideVal={array[12]} id="563"/>
            <DropBox key={"564"} divideVal={array[13]} id="564"/>
            <DropBox key={"565"} divideVal={array[14]} id="565"/>
            <DropBox key={"566"} divideVal={array[15]} id="566"/>
            <DropBox key={"567"} divideVal={array[16]} id="567"/>
            <DropBox key={"568"} divideVal={array[17]} id="568"/>
            <DropBox key={"569"} divideVal={array[18]} id="569"/>
            <DropBox key={"570"} divideVal={array[19]} id="570"/>
            <DropBox key={"571"} divideVal={array[20]} id="571"/>
            <DropBox key={"572"} divideVal={array[21]} id="572"/>
            <DropBox key={"573"} divideVal={array[22]} id="573"/>
            <DropBox key={"574"} divideVal={array[23]} id="574"/>
            <DropBox key={"575"} divideVal={array[24]} id="575"/> 
            <DropBox key={"576"} divideVal={array[25]} id="576"/>
            <DropBox key={"577"} divideVal={array[26]} id="577"/>
            <DropBox key={"578"} divideVal={array[27]} id="578"/>
            <DropBox key={"579"} divideVal={array[28]} id="579"/>
            <DropBox key={"580"} divideVal={array[29]} id="580"/>
            <DropBox key={"581"} divideVal={array[30]} id="581"/>
            <DropBox key={"582"} divideVal={array[31]} id="582"/>
            <DropBox key={"583"} divideVal={array[32]} id="583"/>
            <DropBox key={"584"} divideVal={array[33]} id="584"/>
            <DropBox key={"585"} divideVal={array[34]} id="585"/>
            <DropBox key={"586"} divideVal={array[35]} id="586"/>
            <DropBox key={"587"} divideVal={array[36]} id="587"/>
            <DropBox key={"588"} divideVal={array[37]} id="588"/>
            <DropBox key={"589"} divideVal={array[38]} id="589"/>
            <DropBox key={"590"} divideVal={array[39]} id="590"/>
            <DropBox key={"591"} divideVal={array[40]} id="591"/>
            <DropBox key={"592"} divideVal={array[41]} id="592"/>
            <DropBox key={"593"} divideVal={array[42]} id="593"/>
            <DropBox key={"594"} divideVal={array[43]} id="594"/>
            <DropBox key={"595"} divideVal={array[44]} id="595"/> 
            <DropBox key={"596"} divideVal={array[45]} id="596"/>
            <DropBox key={"597"} divideVal={array[46]} id="597"/>
            <DropBox key={"598"} divideVal={array[47]} id="598"/>
            <DropBox key={"599"} divideVal={array[48]} id="599"/>
            <DropBox key={"600"} divideVal={array[49]} id="600"/>
            </tr>
        , document.getElementById("stepTwelve"))}
        </tbody>
        </table>
        <p id="feedback"></p>
        </div>
        //<button id="nextBtn" onClick={()=> {ReactDOM.render(<></>, document.getElementById("allSteps")); ReactDOM.render(<LevelFive/>, document.getElementById("root"))}}>Next Level</button>
    )
}

export default LevelFive;