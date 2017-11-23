import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as createjs from 'createjs-module';
@Component({
  selector: 'app-provision',
  templateUrl: './provision.component.html',
  styleUrls: ['./provision.component.css']
})
export class ProvisionComponent implements AfterViewInit {
  cnv: createjs.Stage;
  ctx: any;
  @ViewChild('mapEditor') editor: ElementRef;
  constructor() {
  }

  ngAfterViewInit() {
   this.draw();
  }

  draw() {
    this.cnv =  new createjs.Stage('mapEditor');
    // enabled mouse over / out events
    this.cnv.enableMouseOver(10);
    this.cnv.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
    const gridOptions = {
        linesOptions: {
            separation: 10,
            color: 'hsla(0, 0%, 40%, .5)',
            thickness: 1
        }
    };

    const mapPath = '/assets/floormap.jpg';
    this.uploadMap(this.cnv, mapPath);
    this.drawGridLines(gridOptions.linesOptions);
    this.cnv.update();
  }

  drawGridLines(lineOptions) {
    const iWidth = this.editor.nativeElement.width;
    const iHeight = this.editor.nativeElement.height;

    const line = new createjs.Shape();
    line.graphics.setStrokeStyle(lineOptions.thickness);
    let iCount = null;
    let i = null;
    let x = null;
    let y = null;

    iCount = Math.floor(iWidth / lineOptions.separation);

    for (i = 1; i <= iCount; i++) {
        x = (i * lineOptions.separation);
        line.graphics.beginStroke(lineOptions.color);
        line.graphics.moveTo(x, 0);
        line.graphics.lineTo(x, iHeight);
        line.graphics.endStroke();
    }


    iCount = Math.floor(iHeight / lineOptions.separation);

    for (i = 1; i <= iCount; i++) {
        y = (i * lineOptions.separation);
        line.graphics.beginStroke(lineOptions.color);
        line.graphics.moveTo(0, y);
        line.graphics.lineTo(iWidth, y);
        line.graphics.endStroke();
    }
    this.cnv.addChild(line);
  }


  uploadMap(cnv, mapPath): any {
    let bitmap: any;
    const img = new Image();
    img.src = mapPath;
    const width = this.editor.nativeElement.width;
    const height = this.editor.nativeElement.height;
    bitmap = new createjs.Bitmap(img.src);
    bitmap.x = width / 2 - bitmap.image.width / 2;
    bitmap.y = height / 2 - bitmap.image.height / 2;
    cnv.addChild(bitmap);
    img.onload = function(event) {
      cnv.update();
    };
  }

  onDrop($event) {
    console.log($event);
    console.log('Dropped', $event.element);
    setTimeout(() => {
      this.drawIcon($event.event.layerX, $event.event.layerY, $event.element);
    }, 500);
  }


  drawIcon(x, y, element) {
    let icon;
    if (element.data.name.includes('Sensor')) {
      icon = new createjs.Text('\uf2db', '30px FontAwesome', '#004a13');
    } else {
      icon = new createjs.Text('\uf0eb', '30px FontAwesome', '#fff516');
    }
    icon.shadow = new createjs.Shadow('#000000', 0, 0, 10);
    icon.x = x;
    icon.y = y;
    this.cnv.addChild(icon);
    this.manageEvents(icon);
  }

  manageEvents(element) {
    let update: boolean = true;
    element.on('mousedown', function (evt) {
      this.parent.addChild(this);
      this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
    });
    element.on('pressmove', function (evt) {
      this.x = evt.stageX + this.offset.x;
      this.y = evt.stageY + this.offset.y;
      update = true;
    });
    element.on('rollover', function (evt) {
      this.font = '50px FontAwesome';
      update = true;
    });
    element.on('rollout', function (evt) {
      this.font = '30px FontAwesome';
      update = true;
    });
    // this.cnv.addChild(element);
    createjs.Ticker.addEventListener('tick', (event) => {
      if (update) {
        update = false; // only update once
        this.cnv.update(event);
      }
    });
  }

  allowDrop(element) {
    console.log('Dragging', element);
    return true;
  }


}
