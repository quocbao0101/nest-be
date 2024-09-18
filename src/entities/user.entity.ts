import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Adjust the table name as needed
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}