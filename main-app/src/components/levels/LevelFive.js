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
            <DropBox key={"203"} divideVal={array[2]} id="202"/>
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
        {setTempArray([array[0], array[1]])}
        {setTempArray2([array[5], array[6]])}
        {setTempArray3([array[10], array[11]])}
        {setTempArray4([array[15], array[16]])}
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
            <DropBox key={"255"} divideVal={tempArray2[4]} id="255"/>
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
            <DropBox key={"259"} divideVal={tempArray3[8]} id="259"/>
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
            <DropBox key={"263"} divideVal={tempArray4[12]} id="263"/>
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
            <DropBox key={"267"} divideVal={tempArray4[16]} id="267"/>
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
            <DropBox key={"275"} divideVal={tempArray2[24]} id="275"/>
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
            <DropBox key={"279"} divideVal={tempArray3[28]} id="279"/>
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
            <DropBox key={"283"} divideVal={tempArray4[32]} id="283"/>
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
            <DropBox key={"287"} divideVal={tempArray4[36]} id="287"/>
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
            <DropBox key={"294"} divideVal={tempArray4[43]} id="294"/>
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
            <DropBox key={"298"} divideVal={tempArray4[47]} id="298"/>
            &nbsp;
            &nbsp;
            <DropBox key={"299"} divideVal={array[48]} id="299"/>
            &nbsp;
            &nbsp;
            <DropBox key={"300"} divideVal={array[49]} id="300"/>
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
            <DropBox key={"301"} divideVal={array[0]} id="301"/>
            <DropBox key={"302"} divideVal={array[1]} id="302"/>
            &nbsp;
            &nbsp;
            <DropBox key={"303"} divideVal={tempArray2[2]} id="303"/>
            &nbsp;
            &nbsp;
            <DropBox key={"304"} divideVal={tempArray3[3]} id="304"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"305"} divideVal={tempArray4[4]} id="305"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"306"} divideVal={tempArray5[5]} id="306"/>
            <DropBox key={"307"} divideVal={tempArray5[6]} id="307"/>
            &nbsp;
            &nbsp;
            <DropBox key={"308"} divideVal={tempArray6[7]} id="308"/>
            &nbsp;
            &nbsp;
            <DropBox key={"309"} divideVal={tempArray7[8]} id="309"/>
            &nbsp;
            &nbsp;
            <DropBox key={"310"} divideVal={tempArray8[9]} id="310"/>
            &nbsp;
            &nbsp;
            <DropBox key={"311"} divideVal={array[10]} id="311"/>
            <DropBox key={"312"} divideVal={array[11]} id="312"/>
            &nbsp;
            &nbsp;
            <DropBox key={"313"} divideVal={tempArray2[12]} id="313"/>
            &nbsp;
            &nbsp;
            <DropBox key={"314"} divideVal={tempArray3[13]} id="314"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"315"} divideVal={tempArray4[14]} id="315"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"316"} divideVal={tempArray5[15]} id="316"/>
            <DropBox key={"317"} divideVal={tempArray5[16]} id="317"/>
            &nbsp;
            &nbsp;
            <DropBox key={"318"} divideVal={tempArray6[17]} id="318"/>
            &nbsp;
            &nbsp;
            <DropBox key={"319"} divideVal={tempArray7[18]} id="319"/>
            &nbsp;
            &nbsp;
            <DropBox key={"320"} divideVal={tempArray8[19]} id="320"/>
            &nbsp;
            &nbsp;
            <DropBox key={"321"} divideVal={array[20]} id="321"/>
            <DropBox key={"322"} divideVal={array[21]} id="322"/>
            &nbsp;
            &nbsp;
            <DropBox key={"323"} divideVal={tempArray2[22]} id="323"/>
            &nbsp;
            &nbsp;
            <DropBox key={"324"} divideVal={tempArray3[23]} id="324"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"325"} divideVal={tempArray4[24]} id="325"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"326"} divideVal={tempArray5[25]} id="326"/>
            <DropBox key={"327"} divideVal={tempArray5[26]} id="327"/>
            &nbsp;
            &nbsp;
            <DropBox key={"328"} divideVal={tempArray6[27]} id="328"/>
            &nbsp;
            &nbsp;
            <DropBox key={"329"} divideVal={tempArray7[28]} id="329"/>
            &nbsp;
            &nbsp;
            <DropBox key={"330"} divideVal={tempArray8[29]} id="330"/>
            &nbsp;
            &nbsp;
            <DropBox key={"331"} divideVal={array[30]} id="331"/>
            <DropBox key={"332"} divideVal={array[31]} id="332"/>
            &nbsp;
            &nbsp;
            <DropBox key={"333"} divideVal={tempArray2[32]} id="333"/>
            &nbsp;
            &nbsp;
            <DropBox key={"334"} divideVal={tempArray3[33]} id="334"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"335"} divideVal={tempArray4[34]} id="335"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"336"} divideVal={tempArray5[35]} id="336"/>
            <DropBox key={"337"} divideVal={tempArray5[36]} id="337"/>
            &nbsp;
            &nbsp;
            <DropBox key={"338"} divideVal={tempArray6[37]} id="338"/>
            &nbsp;
            &nbsp;
            <DropBox key={"339"} divideVal={tempArray7[38]} id="339"/>
            &nbsp;
            &nbsp;
            <DropBox key={"340"} divideVal={tempArray8[39]} id="340"/>
            &nbsp;
            &nbsp;
            <DropBox key={"341"} divideVal={array[40]} id="341"/>
            <DropBox key={"342"} divideVal={array[41]} id="342"/>
            &nbsp;
            &nbsp;
            <DropBox key={"343"} divideVal={tempArray2[42]} id="343"/>
            &nbsp;
            &nbsp;
            <DropBox key={"344"} divideVal={tempArray3[43]} id="344"/>
            &nbsp;
            &nbsp; 
            <DropBox key={"345"} divideVal={tempArray4[44]} id="345"/> 
            &nbsp;
            &nbsp;
            <DropBox key={"346"} divideVal={tempArray5[45]} id="346"/>
            <DropBox key={"347"} divideVal={tempArray5[46]} id="347"/>
            &nbsp;
            &nbsp;
            <DropBox key={"348"} divideVal={tempArray6[47]} id="348"/>
            &nbsp;
            &nbsp;
            <DropBox key={"349"} divideVal={tempArray7[48]} id="349"/>
            &nbsp;
            &nbsp;
            <DropBox key={"350"} divideVal={tempArray8[49]} id="350"/>
            </tr>, document.getElementById("stepSeven"))
        }
        {setTempArray([array[0], array[1], array[2], array[3], array[4]])}
        {setTempArray2([array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray3([array[10], array[11], array[12], array[13], array[14]])}
        {setTempArray4([array[15], array[16], array[17], array[18], array[19]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"351"} divideVal={array[0]} id="351"/>
            <DropBox key={"352"} divideVal={array[1]} id="352"/>
            <DropBox key={"353"} divideVal={array[2]} id="353"/>
            &nbsp;
            &nbsp;
            <DropBox key={"354"} divideVal={array[3]} id="354"/>
            <DropBox key={"355"} divideVal={array[4]} id="355"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"356"} divideVal={tempArray2[5]} id="356"/>
            <DropBox key={"357"} divideVal={tempArray2[6]} id="357"/>
            <DropBox key={"358"} divideVal={tempArray2[7]} id="358"/>
            &nbsp;
            &nbsp;
            <DropBox key={"359"} divideVal={tempArray2[8]} id="359"/>
            <DropBox key={"360"} divideVal={tempArray2[9]} id="360"/>
            &nbsp;
            &nbsp;
            <DropBox key={"361"} divideVal={tempArray3[10]} id="361"/>
            <DropBox key={"362"} divideVal={tempArray3[11]} id="362"/>
            <DropBox key={"363"} divideVal={tempArray3[12]} id="363"/>
            &nbsp;
            &nbsp;
            <DropBox key={"364"} divideVal={tempArray3[13]} id="364"/>
            <DropBox key={"365"} divideVal={tempArray3[14]} id="365"/>
            &nbsp;
            &nbsp;
            <DropBox key={"366"} divideVal={tempArray4[15]} id="366"/>
            <DropBox key={"367"} divideVal={tempArray4[16]} id="367"/>
            <DropBox key={"368"} divideVal={tempArray4[17]} id="368"/>
            &nbsp;
            &nbsp;
            <DropBox key={"369"} divideVal={tempArray4[18]} id="369"/>
            <DropBox key={"370"} divideVal={tempArray4[19]} id="370"/>
            &nbsp;
            &nbsp;
            <DropBox key={"371"} divideVal={array[20]} id="371"/>
            <DropBox key={"372"} divideVal={array[21]} id="372"/>
            <DropBox key={"373"} divideVal={array[22]} id="373"/>
            &nbsp;
            &nbsp;
            <DropBox key={"374"} divideVal={array[23]} id="374"/>
            <DropBox key={"375"} divideVal={array[24]} id="375"/>
            &nbsp;
            &nbsp;    
            <DropBox key={"376"} divideVal={tempArray2[25]} id="376"/>
            <DropBox key={"377"} divideVal={tempArray2[26]} id="377"/>
            <DropBox key={"378"} divideVal={tempArray2[27]} id="378"/>
            &nbsp;
            &nbsp;
            <DropBox key={"379"} divideVal={tempArray2[28]} id="379"/>
            <DropBox key={"380"} divideVal={tempArray2[29]} id="380"/>
            &nbsp;
            &nbsp;
            <DropBox key={"381"} divideVal={tempArray3[30]} id="381"/>
            <DropBox key={"382"} divideVal={tempArray3[31]} id="382"/>
            <DropBox key={"383"} divideVal={tempArray3[32]} id="383"/>
            &nbsp;
            &nbsp;
            <DropBox key={"384"} divideVal={tempArray3[33]} id="384"/>
            <DropBox key={"385"} divideVal={tempArray3[34]} id="385"/>
            &nbsp;
            &nbsp;
            <DropBox key={"386"} divideVal={tempArray4[35]} id="386"/>
            <DropBox key={"387"} divideVal={tempArray4[36]} id="387"/>
            <DropBox key={"388"} divideVal={tempArray4[37]} id="388"/>
            &nbsp;
            &nbsp;
            <DropBox key={"389"} divideVal={tempArray4[38]} id="389"/>
            <DropBox key={"390"} divideVal={tempArray4[39]} id="390"/>
            &nbsp;
            &nbsp;
            <DropBox key={"391"} divideVal={tempArray3[40]} id="391"/>
            <DropBox key={"392"} divideVal={tempArray3[41]} id="392"/>
            <DropBox key={"393"} divideVal={tempArray3[42]} id="393"/>
            &nbsp;
            &nbsp;
            <DropBox key={"394"} divideVal={tempArray3[43]} id="394"/>
            <DropBox key={"395"} divideVal={tempArray3[44]} id="395"/>
            &nbsp;
            &nbsp;
            <DropBox key={"396"} divideVal={tempArray4[45]} id="396"/>
            <DropBox key={"397"} divideVal={tempArray4[46]} id="397"/>
            <DropBox key={"398"} divideVal={tempArray4[47]} id="398"/>
            &nbsp;
            &nbsp;
            <DropBox key={"399"} divideVal={tempArray4[48]} id="399"/>
            <DropBox key={"400"} divideVal={tempArray4[49]} id="400"/>
            </tr>
        , document.getElementById("stepEight"))}
        {setTempArray([array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]])}
        {setTempArray2([array[10], array[11], array[12], array[13], array[14], array[15], array[16], array[17], array[18], array[19]])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"401"} divideVal={array[0]} id="401"/>
            <DropBox key={"402"} divideVal={array[1]} id="402"/>
            <DropBox key={"403"} divideVal={array[2]} id="403"/>
            <DropBox key={"404"} divideVal={array[3]} id="404"/>
            <DropBox key={"405"} divideVal={array[4]} id="405"/>
            &nbsp;
            &nbsp;
            <DropBox key={"406"} divideVal={array[5]} id="406"/>
            <DropBox key={"407"} divideVal={array[6]} id="407"/>
            <DropBox key={"408"} divideVal={array[7]} id="408"/>
            <DropBox key={"409"} divideVal={array[8]} id="409"/>
            <DropBox key={"410"} divideVal={array[9]} id="410"/>
            &nbsp;
            &nbsp;
            <DropBox key={"411"} divideVal={tempArray2[10]} id="411"/>
            <DropBox key={"412"} divideVal={tempArray2[11]} id="412"/>
            <DropBox key={"413"} divideVal={tempArray2[12]} id="413"/>
            <DropBox key={"414"} divideVal={tempArray2[13]} id="414"/>
            <DropBox key={"415"} divideVal={tempArray2[14]} id="415"/>
            &nbsp;
            &nbsp;
            <DropBox key={"416"} divideVal={tempArray2[15]} id="416"/>
            <DropBox key={"417"} divideVal={tempArray2[16]} id="417"/>
            <DropBox key={"418"} divideVal={tempArray2[17]} id="418"/>
            <DropBox key={"419"} divideVal={tempArray2[18]} id="419"/>
            <DropBox key={"420"} divideVal={tempArray2[19]} id="420"/>
            &nbsp;
            &nbsp;
            <DropBox key={"421"} divideVal={array[20]} id="421"/>
            <DropBox key={"422"} divideVal={array[21]} id="422"/>
            <DropBox key={"423"} divideVal={array[22]} id="423"/>
            <DropBox key={"424"} divideVal={array[23]} id="424"/>
            <DropBox key={"425"} divideVal={array[24]} id="425"/>
            &nbsp;
            &nbsp;
            <DropBox key={"426"} divideVal={array[25]} id="426"/>
            <DropBox key={"427"} divideVal={array[26]} id="427"/>
            <DropBox key={"428"} divideVal={array[27]} id="428"/>
            <DropBox key={"429"} divideVal={array[28]} id="429"/>
            <DropBox key={"430"} divideVal={array[29]} id="430"/>
            &nbsp;
            &nbsp;
            <DropBox key={"431"} divideVal={tempArray2[30]} id="431"/>
            <DropBox key={"432"} divideVal={tempArray2[31]} id="432"/>
            <DropBox key={"433"} divideVal={tempArray2[32]} id="433"/>
            <DropBox key={"434"} divideVal={tempArray2[33]} id="434"/>
            <DropBox key={"435"} divideVal={tempArray2[34]} id="435"/>
            &nbsp;
            &nbsp;
            <DropBox key={"436"} divideVal={tempArray2[35]} id="436"/>
            <DropBox key={"437"} divideVal={tempArray2[36]} id="437"/>
            <DropBox key={"438"} divideVal={tempArray2[37]} id="438"/>
            <DropBox key={"439"} divideVal={tempArray2[38]} id="439"/>
            <DropBox key={"440"} divideVal={tempArray2[39]} id="440"/>
            &nbsp;
            &nbsp;
            <DropBox key={"441"} divideVal={tempArray2[40]} id="441"/>
            <DropBox key={"442"} divideVal={tempArray2[41]} id="442"/>
            <DropBox key={"443"} divideVal={tempArray2[42]} id="443"/>
            <DropBox key={"444"} divideVal={tempArray2[43]} id="444"/>
            <DropBox key={"445"} divideVal={tempArray2[44]} id="445"/>
            &nbsp;
            &nbsp;
            <DropBox key={"446"} divideVal={tempArray2[45]} id="446"/>
            <DropBox key={"447"} divideVal={tempArray2[46]} id="447"/>
            <DropBox key={"448"} divideVal={tempArray2[47]} id="448"/>
            <DropBox key={"449"} divideVal={tempArray2[48]} id="449"/>
            <DropBox key={"450"} divideVal={tempArray2[49]} id="450"/>
            </tr>
        , document.getElementById("stepNine"))}
        {setTempArray([...array])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"451"} divideVal={array[0]} id="451"/>
            <DropBox key={"452"} divideVal={array[1]} id="452"/>
            <DropBox key={"453"} divideVal={array[2]} id="453"/>
            <DropBox key={"454"} divideVal={array[3]} id="454"/>
            <DropBox key={"455"} divideVal={array[4]} id="455"/> 
            <DropBox key={"456"} divideVal={array[5]} id="456"/>
            <DropBox key={"457"} divideVal={array[6]} id="457"/>
            <DropBox key={"458"} divideVal={array[7]} id="458"/>
            <DropBox key={"459"} divideVal={array[8]} id="459"/>
            <DropBox key={"460"} divideVal={array[9]} id="460"/>
            <DropBox key={"461"} divideVal={array[10]} id="461"/>
            <DropBox key={"462"} divideVal={array[11]} id="462"/>
            <DropBox key={"463"} divideVal={array[12]} id="463"/>
            <DropBox key={"464"} divideVal={array[13]} id="464"/>
            <DropBox key={"465"} divideVal={array[14]} id="465"/> 
            <DropBox key={"466"} divideVal={array[15]} id="466"/>
            <DropBox key={"467"} divideVal={array[16]} id="467"/>
            <DropBox key={"468"} divideVal={array[17]} id="468"/>
            <DropBox key={"469"} divideVal={array[18]} id="469"/>
            <DropBox key={"470"} divideVal={array[19]} id="470"/>
            <DropBox key={"471"} divideVal={array[20]} id="471"/>
            <DropBox key={"472"} divideVal={array[21]} id="472"/>
            <DropBox key={"473"} divideVal={array[22]} id="473"/>
            <DropBox key={"474"} divideVal={array[23]} id="474"/>
            <DropBox key={"475"} divideVal={array[24]} id="475"/>
            &nbsp;
            &nbsp;
            <DropBox key={"476"} divideVal={array[25]} id="476"/>
            <DropBox key={"477"} divideVal={array[26]} id="477"/>
            <DropBox key={"478"} divideVal={array[27]} id="478"/>
            <DropBox key={"479"} divideVal={array[28]} id="479"/>
            <DropBox key={"480"} divideVal={array[29]} id="480"/>
            <DropBox key={"481"} divideVal={array[30]} id="481"/>
            <DropBox key={"482"} divideVal={array[31]} id="482"/>
            <DropBox key={"483"} divideVal={array[32]} id="483"/>
            <DropBox key={"484"} divideVal={array[33]} id="484"/>
            <DropBox key={"485"} divideVal={array[34]} id="485"/>
            <DropBox key={"486"} divideVal={array[35]} id="486"/>
            <DropBox key={"487"} divideVal={array[36]} id="487"/>
            <DropBox key={"488"} divideVal={array[37]} id="488"/>
            <DropBox key={"489"} divideVal={array[38]} id="489"/>
            <DropBox key={"490"} divideVal={array[39]} id="490"/> 
            <DropBox key={"491"} divideVal={array[40]} id="491"/>
            <DropBox key={"492"} divideVal={array[41]} id="492"/>
            <DropBox key={"493"} divideVal={array[42]} id="493"/>
            <DropBox key={"494"} divideVal={array[43]} id="494"/>
            <DropBox key={"495"} divideVal={array[44]} id="495"/>
            <DropBox key={"496"} divideVal={array[45]} id="496"/>
            <DropBox key={"497"} divideVal={array[46]} id="497"/>
            <DropBox key={"498"} divideVal={array[47]} id="498"/>
            <DropBox key={"499"} divideVal={array[48]} id="499"/>
            <DropBox key={"500"} divideVal={array[49]} id="500"/>
            </tr>
        , document.getElementById("stepTen"))}
        {setTempArray([...array])}
        {ReactDOM.render(
            <tr>
            <DropBox key={"501"} divideVal={array[0]} id="1201"/>
            <DropBox key={"502"} divideVal={array[1]} id="1202"/>
            <DropBox key={"503"} divideVal={array[2]} id="1204"/>
            <DropBox key={"504"} divideVal={array[3]} id="1205"/>
            <DropBox key={"505"} divideVal={array[4]} id="1206"/> 
            <DropBox key={"506"} divideVal={array[5]} id="1208"/>
            <DropBox key={"507"} divideVal={array[6]} id="1209"/>
            <DropBox key={"508"} divideVal={array[7]} id="188"/>
            <DropBox key={"509"} divideVal={array[8]} id="189"/>
            <DropBox key={"510"} divideVal={array[9]} id="190"/>
            <DropBox key={"511"} divideVal={array[10]} id="1214"/>
            <DropBox key={"512"} divideVal={array[11]} id="1215"/>
            <DropBox key={"513"} divideVal={array[12]} id="1216"/>
            <DropBox key={"514"} divideVal={array[13]} id="121817"/>
            <DropBox key={"515"} divideVal={array[14]} id="195"/>
            <DropBox key={"516"} divideVal={array[15]} id="196"/>
            <DropBox key={"517"} divideVal={array[16]} id="197"/>
            <DropBox key={"518"} divideVal={array[17]} id="1223"/>
            <DropBox key={"519"} divideVal={array[18]} id="199"/>
            <DropBox key={"520"} divideVal={array[19]} id="200"/>
            <DropBox key={"521"} divideVal={array[20]} id="1201"/>
            <DropBox key={"522"} divideVal={array[21]} id="1202"/>
            <DropBox key={"523"} divideVal={array[22]} id="1204"/>
            <DropBox key={"524"} divideVal={array[23]} id="1205"/>
            <DropBox key={"525"} divideVal={array[24]} id="1206"/> 
            <DropBox key={"526"} divideVal={array[25]} id="1208"/>
            <DropBox key={"527"} divideVal={array[26]} id="1209"/>
            <DropBox key={"528"} divideVal={array[27]} id="188"/>
            <DropBox key={"529"} divideVal={array[28]} id="189"/>
            <DropBox key={"530"} divideVal={array[29]} id="190"/>
            <DropBox key={"531"} divideVal={array[30]} id="1214"/>
            <DropBox key={"532"} divideVal={array[31]} id="1215"/>
            <DropBox key={"533"} divideVal={array[32]} id="1216"/>
            <DropBox key={"534"} divideVal={array[33]} id="121817"/>
            <DropBox key={"535"} divideVal={array[34]} id="195"/>
            <DropBox key={"536"} divideVal={array[35]} id="196"/>
            <DropBox key={"537"} divideVal={array[36]} id="197"/>
            <DropBox key={"538"} divideVal={array[37]} id="1223"/>
            <DropBox key={"539"} divideVal={array[38]} id="199"/>
            <DropBox key={"540"} divideVal={array[39]} id="200"/>
            <DropBox key={"541"} divideVal={array[40]} id="1201"/>
            <DropBox key={"542"} divideVal={array[41]} id="1202"/>
            <DropBox key={"543"} divideVal={array[42]} id="1204"/>
            <DropBox key={"544"} divideVal={array[43]} id="1205"/>
            <DropBox key={"545"} divideVal={array[44]} id="1206"/> 
            <DropBox key={"546"} divideVal={array[45]} id="1208"/>
            <DropBox key={"547"} divideVal={array[46]} id="1209"/>
            <DropBox key={"548"} divideVal={array[47]} id="188"/>
            <DropBox key={"549"} divideVal={array[48]} id="189"/>
            <DropBox key={"550"} divideVal={array[49]} id="190"/>
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