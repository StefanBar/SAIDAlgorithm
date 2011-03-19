/**
 *  South African ID Number Algorithm
 *  Copyright 2011, Stefan Bar | http://stefanbar.com
 *  
 *  Released under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */
function getSAID(id) {
    if (id) {
        var exp = /^\d{10}[0-1]\d{2}$/;
        var id = id.toString();
        if (exp.test(id) && id != "0000000000000") {
            var d = id.split("");
            var s = 0;
            var sr = 0;
            for (var i = 0, il = (d.length - 1); i < il; i++) {
                if (!(i % 2 == 0)) {
                    d[i] = parseInt(d[i]) * 2;
                    if (d[i].toString().length > 1) {
                        var c = d[i].toString().split("");
                        d[i] = (parseInt(c[0]) + parseInt(c[1]));
                    }
                }
                s += parseInt(d[i]);
            }
            sr = s;
            if (sr.toString().length > 1) {
                if (sr.toString().substr(1, 1) != "0") {
                    sr = parseInt(s.toString().substr(0, 1)) + 1;
                    sr = parseInt(sr.toString() + "0");
                }
            }
            if ((sr - s) == parseInt(id.substr(12, 1))) {
                return {
                    "valid": true,
                    "dob": id.substr(4, 2) + "/" + id.substr(2, 2) + "/" + id.substr(0, 2),
                    "gender": ((id.substr(6, 1) > 4) ? "male" : "female")
                }
            }
        }
    }
    return false;
}