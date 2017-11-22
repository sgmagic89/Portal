import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as createjs from 'createjs-module';
@Component({
  selector: 'app-provision',
  templateUrl: './provision.component.html',
  styleUrls: ['./provision.component.css']
})
export class ProvisionComponent implements AfterViewInit {
  cnv: any;
  ctx: any;
  constructor() { }

  ngAfterViewInit() {
   this.draw();
  }

  draw() {
    this.cnv = document.getElementById('mapEditor');
    const gridOptions = {
        minorLines: {
            separation: 10,
            color: 'hsla(0, 0%, 40%, .5)'
        }
    };

    const mapPath = '/assets/floormap.jpg';
    this.uploadMap(this.cnv, mapPath);
    this.drawGridLines(this.cnv, gridOptions.minorLines);
  }

  drawGridLines(cnv, lineOptions) {
    const iWidth = cnv.width;
    const iHeight = cnv.height;

    this.ctx = cnv.getContext('2d');
    this.ctx.translate(0.5, 0.5);
    this.ctx.strokeStyle = lineOptions.color;
    this.ctx.strokeWidth = 1;

    this.ctx.beginPath();

    let iCount = null;
    let i = null;
    let x = null;
    let y = null;

    iCount = Math.floor(iWidth / lineOptions.separation);

    for (i = 1; i <= iCount; i++) {
        x = (i * lineOptions.separation);
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, iHeight);
        this.ctx.stroke();
    }


    iCount = Math.floor(iHeight / lineOptions.separation);

    for (i = 1; i <= iCount; i++) {
        y = (i * lineOptions.separation);
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(iWidth, y);
        this.ctx.stroke();
    }

    this.ctx.closePath();

    return;
  }


  uploadMap(cnv, mapSrc) {
    const context = cnv.getContext('2d');
    context.globalCompositeOperation = 'destination-over';
    const imageObj = new Image();

    imageObj.onload = function() {
      context.drawImage(imageObj, 0, 0);
    };
    imageObj.src = mapSrc;
  }

  onDrop($event) {
    console.log('Dropped', $event.element);
    setTimeout(() => {
      this.drawIcon();
    }, 500);
  }

  drawIcon() {
    this.ctx.globalCompositeOperation = 'destination-over';
    this.ctx.font = '30px Arial';
    this.ctx.strokeText('Hello World', 10, 50);
  }

  allowDrop(element) {
    console.log('Dragging', element);
    return true;
  }

}
