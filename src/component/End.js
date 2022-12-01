import React from 'react'
import'./Style.css'

export default function End() {
  return (
    <div>
        <div class=" row  footer_row m-4 ">
          <div class="col-lg-3 ">
            <h4 class="mb-5 "><i class="fa-solid fa-book "></i> Tutorpoint</h4>
            <i class="fa-brands fa-facebook-f icon"></i> <i class="fa-brands fa-twitter icon"></i> <i class="fa-brands fa-google icon"></i>
            <p class="text-dark">Copyright &copy 2022 All rights reserved | Made by <a href="#" class="text-white">Tanuja Khatun </a></p>
          </div>
          <div class="col-lg-3">
              <h4 >About Us</h4>
            <ul>
              <li><a class="nav-link" href="#">Company</a></li>
              <li><a class="nav-link" href="#">Our Team</a></li>
              <li><a class="nav-link" href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="col-lg-3">
              <h4>Extra Links</h4>
            <ul>
              <li><a class="nav-link" href="#"><i class="fa-solid fa-check"></i>Articles</a></li>
              <li><a class="nav-link" href="#"><i class="fa-solid fa-check"></i>Dev Tools</a></li>
              </ul>
            </div>
            <div class="col-lg-3">
              <h4>Contact Us</h4>
            <ul>
              <li>Address:10th Floor, VIP Road,Mumbai, Maharashtra,404041</li>
              <li>Website:<a href="#"> www.Tutorpoint.com </a></li>
              </ul>
            </div>
          </div>
      </div>
    
  )
}
