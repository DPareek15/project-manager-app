import Header from '@/components/Header';
import React from 'react';

const Settings = () => {
  const userSettings = {
    username: 'johndoe',
    email: 'john.doe.dev@company.com',
    teamName: 'Development Team',
    roleName: 'Developer',
  };

  const labelStyles = 'block text-sm text-black font-medium dark: text-white';
  const textStyles =
    'mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white';

  return (
    <div className="p-8">
      <Header name="Settings" />
      <div className="space-y-4">
        <div>
          <label className={labelStyles} htmlFor="username">
            Username
          </label>
          <div className={textStyles} id="username">
            {userSettings.username}
          </div>
        </div>
        <div>
          <label className={labelStyles} htmlFor="useremail">
            Email
          </label>
          <div className={textStyles} id="useremail">
            {userSettings.email}
          </div>
        </div>
        <div>
          <label className={labelStyles} htmlFor="teamName">
            Team
          </label>
          <div className={textStyles} id="teamName">
            {userSettings.teamName}
          </div>
        </div>
        <div>
          <label className={labelStyles} htmlFor="roleName">
            Role(s)
          </label>
          <div className={textStyles} id="roleName">
            {userSettings.roleName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
