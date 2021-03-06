import { Component, Input, Output, OnInit } from '@angular/core';
import { TestCaseStatusService } from '../../data-mock/test-case-status.service'

@Component({
  selector: 'app-test-case-status-by-test-suite-based-on-build-package',
  templateUrl: './test-case-status-by-test-suite-based-on-build-package.component.html',
  styleUrls: ['./test-case-status-by-test-suite-based-on-build-package.component.less']
})
export class TestCaseStatusByTestSuiteBasedOnBuildPackageComponent implements OnInit {
  @Input() hideDetails: boolean = true;
  @Output() chart1Data: (string | number)[][];
  @Output() chart2Data: (string | number)[][];
  @Output() chart3Data: (string | number)[][];
  @Output() chart4Data: (string | number)[][];
  @Output() chart5Data: (string | number)[][];
  @Output() chart6Data: (string | number)[][];

  constructor(private testCaseStatusService: TestCaseStatusService) { }

  ngOnInit() {
    this.testCaseStatusService.byTestSuiteObservable.subscribe(data => this.chart1Data = data);
    this.testCaseStatusService.byTestSuiteObservable.subscribe(data => this.chart2Data = data);
    this.testCaseStatusService.byTestSuiteObservable.subscribe(data => this.chart3Data = data);
    this.testCaseStatusService.byTestSuiteObservable.subscribe(data => this.chart4Data = data);
    this.testCaseStatusService.byTestSuiteObservable.subscribe(data => this.chart5Data = data);
    this.testCaseStatusService.byTestSuiteObservable.subscribe(data => this.chart6Data = data);
  }

}
