import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent {

  constructor(private el: ElementRef, private renderer: Renderer2){}

  ngAfterViewInit(){
    const scrollers = this.el.nativeElement.querySelectorAll('.scroller');

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      addAnimation();
    }

    function addAnimation(){
      scrollers.forEach((scroller : any) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item : any) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
          console.log(duplicatedItem);
        });
      });
    }
    console.log(scrollers);
  }


}
