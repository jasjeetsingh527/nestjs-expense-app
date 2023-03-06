import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

import { Exclude, Expose } from 'class-transformer';
import { ReportType } from 'src/data';
import { format } from 'date-fns';
export class CreateReportDTO {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}

export class UpdateReportDTO {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}

export class ReportResponseDTO {
  id: string;
  source: string;
  amount: number;
  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;
  type: ReportType;

  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return format(this.created_at, 'yyyy-MM-dd HH:mm');
  }

  constructor(partial: Partial<ReportResponseDTO>) {
    Object.assign(this, partial);
  }
}
