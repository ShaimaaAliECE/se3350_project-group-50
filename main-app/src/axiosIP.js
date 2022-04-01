const ip = window.location.href;
module.exports = {
    getIP : function() {
        let iptemp = ip.split("/build")[0];
        iptemp += ":3001/"
        console.log(iptemp)
        return iptemp; 
    },
}
    