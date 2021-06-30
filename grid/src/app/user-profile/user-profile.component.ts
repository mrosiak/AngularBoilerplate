import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from "../users/user.service";
import { MemberService } from "../membership/member.service";
import { User } from '../users/users-model';
import { Role } from '../common/role-enum';
import { Validators, FormBuilder, FormGroup  } from '@angular/forms';
interface MyType {
  key: number,
  name: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers:[UserService,MemberService]
})
export class UserProfileComponent implements OnInit {
  profileForm:FormGroup;
  Roles:MyType[]=[{key:Role.NoAccess,name:Role[Role.NoAccess]},
  {key:Role.Author,name:Role[Role.Author]},
  {key:Role.Admin,name:Role[Role.Admin]},
  {key:Role.Marketing,name:Role[Role.Marketing]},
    ];

  currentUser:User;
  constructor(private userProvider:UserService,private membershipProvider:MemberService, private fb: FormBuilder, private cdr: ChangeDetectorRef) { 

    this.currentUser={id:0, email: '', first_name: 'Jon', last_name: 'Doe', avatar: '', role: Role.NoAccess, job:'',updatedAt:'',name:'Jon Doe'};
    if(membershipProvider.hasValidToken()){
      userProvider.GetProfile(membershipProvider.userId).subscribe(o=> 
        {
          this.currentUser = o.data;
          this.currentUser.role = Role.Admin;
          this.profileForm=this.userToForm();
      });
    }
    this.profileForm=this.userToForm();
  }

  ngOnInit(): void {
    this.profileForm=this.userToForm();
  }
  update(){
    const user = this.getUserFromForm();
    this.userProvider.UpdateProfile(this.membershipProvider.userId, user).subscribe((o)=>{
      this.currentUser.name=user.name;
      this.currentUser.job=user.job;
      this.currentUser.updatedAt=o.updatedAt;
      this.profileForm.get('updatedAt')?.patchValue(this.currentUser.updatedAt);
      this.cdr.detectChanges();
    })
  }
  userToForm(){
     return this.fb.group({
      email:[this.currentUser.email],
      id:[this.currentUser.id],    
      name:[this.currentUser.name, Validators.required],
      firstname:[this.currentUser.first_name],
      surname:[this.currentUser.last_name],
      avatar:[this.currentUser.avatar],
      role:[this.currentUser.role],
      job:[this.currentUser.job, Validators.required]  ,
      updatedAt:[{value: this.currentUser.updatedAt, disabled:true}]   
  });
  }
  getUserFromForm():User {
    return {
      email:this.currentUser.email,
      id:this.currentUser.id,
      name:this.profileForm?.get('name')?.value,
      first_name:this.currentUser.first_name,
      last_name:this.currentUser.last_name,
      avatar:this.currentUser.avatar,
      job:this.profileForm?.get('job')?.value,
      updatedAt:this.currentUser.updatedAt,
      role:this.currentUser.role
    }
  }
  changeRole(e:Event) {
    const element = e.target as HTMLSelectElement;
    this.profileForm?.get('role')?.setValue(this.Roles[element.selectedIndex-1].key, {
      onlySelf: true
    })
  }
}

