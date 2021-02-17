import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {   //  default diolog + with animation

  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public successData: { msg: string, title?: string }) { }

  public redirectUrl: string = null;

  options: AnimationOptions = {
    path: '/assets/animations/succeeded.json',
    autoplay: true,
    loop: false,
  };

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}