import { Module } from '@nestjs/common';
import { configModule, typeOrmModule } from 'config/module';
import { AccountModule } from './account/account.module';
import { AccountAdminModule } from './account-admin/account-admin.module';
import { AccountUserModule } from './account-user/account-user.module';

@Module({
  imports: [configModule('account'), typeOrmModule(), AccountModule, AccountAdminModule, AccountUserModule],
})
export class AppModule {}
