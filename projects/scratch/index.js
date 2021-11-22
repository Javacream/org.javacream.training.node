import {circleArea} from 'simple_es6_module'
//var circleUtil = require ('simple_commonjs_module')
import _ from 'amd-loader'
import circleUtil from 'simple_commonjs_module'
import circleUtilAmd from 'simple_amd_module'
console.log(circleUtil.circleArea(1))
console.log(circleArea(1))
console.log(circleUtilAmd.circleArea(1))

