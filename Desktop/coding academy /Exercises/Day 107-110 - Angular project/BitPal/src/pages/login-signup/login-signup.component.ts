import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  isLogin:Boolean
  user={
    name:'',
    username:'',
    password:'' 
  }
  isError:Boolean;
  constructor(private router:Router ,private userService:UserService) { }

  async ngOnInit(){
    const {url}= this.router
    this.isLogin=url.includes('login')
  }
async onLoginSignup(form){
  const{name,username,password}=form.value 
  try{
    if(this.isLogin){
      await this.userService.login(username,password)
    } 
    else await this.userService.signup({name,username,password})
    console.log('going to navigate')
    this.router.navigate(['/'])
  } catch (err){
    this.isError=true;
    setTimeout(()=>{
      this.isError=false
    })
  }
}
}
