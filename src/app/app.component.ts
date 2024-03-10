import { Component, OnInit } from '@angular/core';

import * as Excel from 'exceljs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  fileName = 'ExcelSheet.xlsx';
  ngOnInit(): void {}
  exportexcel(): void {
    /* table id is passed over here */
    let endCell = 0;
    let element = document.getElementById('excel-table');
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('First');
    const headerRow = worksheet.addRow([]);

    const headerCells: any = element?.getElementsByClassName('top-heading');
    console.log(headerCells);

    let startCell = 'C';
    for (let i = 0, j = 0; i < headerCells?.length; i++) {
      if (i == 0) {
        headerRow.getCell(i + j + 1).value = headerCells[i].innerText;
        j = headerCells[i].colSpan;
      } else {
        headerRow.getCell(i + j).value = headerCells[i].innerText;
        if (headerCells[i].colSpan > 1) {
          j += headerCells[i].colSpan - 1;
        }
      }

      if (i > 1) {
        endCell += this.alphabetToNumber(startCell) + headerCells[i].colSpan;
        console.log(endCell);
        console.log(this.numToAlpha(endCell), i);
        worksheet.mergeCells(
          startCell + '1' + ':' + this.numToAlpha(endCell) + '1'
        );

        startCell = this.numToAlpha(endCell + 1) + '1';
      }
    }

    const subheaderRow = worksheet.addRow([]);

    const subHeaderCells: any = element?.getElementsByClassName('sub-heading');

    for (let i = 0; i < subHeaderCells?.length; i++) {
      subheaderRow.getCell(i + 3).value = subHeaderCells[i].innerText;
    }

    const rows: any = element?.getElementsByTagName('tr');
    console.log(rows);
    for (let i = 0; i < rows?.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      console.log(cells);
      const rowData = [];
      for (let j = 0; j < cells.length; j++) {
        rowData.push(cells[j].innerText);
      }

      worksheet.addRow(rowData);
    }

    const cell: any = worksheet.getCell('A1');
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFF00' },
      bgColor: { argb: 'FFFF00' },
    };

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      saveAs(blob, 'output.xlsx');
    });
  }

  private numToAlpha(num: number) {
    let alpha = '';

    for (; num >= 0; num = parseInt((num / 26).toString(), 10) - 1) {
      alpha = String.fromCharCode((num % 26) + 0x41) + alpha;
    }

    return alpha;
  }

  private alphabetToNumber(character: any) {
    // Convert character to lowercase to handle both cases
    character = character.toLowerCase();

    // Check if the character is a letter
    if (/^[a-z]$/.test(character)) {
      // Subtract the ASCII value of 'a' and add 1
      return character.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else {
      // If not a letter, return null or throw an error
      return null; // or throw new Error("Input is not a letter");
    }
  }
}
