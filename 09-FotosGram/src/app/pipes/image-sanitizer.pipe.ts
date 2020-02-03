import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imageSanitizer'
})
export class ImageSanitizerPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform(img: any): any {

    

    const imgA = this.domSanitizer.bypassSecurityTrustUrl(img);
    console.log(imgA);
    return imgA;

  }

}
