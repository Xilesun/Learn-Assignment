import 'copy!jquery/dist/jquery.min.js'
import $ from 'jquery'
import { display } from './demo'

$(document).ready(function($) {	
  display();
  $(window).on('resize', display);
});
