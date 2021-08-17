import bcrypt from "bcrypt";
import { IsBoolean, IsEmail, IsString, Length } from "class-validator";
import { BeforeInsert, Column, Entity } from "typeorm";
import { Base } from "./base";

@Entity()
export class User extends Base {
  @Column()
  @IsString()
  @Length(2, 50)
  firstName: string;

  @Column()
  @IsString()
  @Length(2, 50)
  lastName: string;

  @Column({ nullable: true, unique: true })
  @IsEmail()
  email?: string;

  @Column({ nullable: true, select: false })
  @Length(6, 50)
  password?: string;

  @Column({ nullable: true })
  @IsString()
  @Length(10, 300)
  about?: string;

  @Column({ default: true })
  @IsBoolean()
  isActive: boolean;

  @Column({ default: false })
  @IsBoolean()
  isBlocked: boolean;


  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
