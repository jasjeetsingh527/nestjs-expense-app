import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
// import { CustomInterceptor } from './custom.interceptor';
import { ReportModule } from './report/report.module';
import { ReportService } from './report/report.service';
import { ReportController } from './report/report.controller';
import { SummaryModule } from './summary/summary.module';

@Module({
  imports: [ReportModule, SummaryModule],
  controllers: [ReportController],
  providers: [
    ReportService,
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    // { provide: APP_INTERCEPTOR, useClass: CustomInterceptor },
  ],
})
export class AppModule {}
