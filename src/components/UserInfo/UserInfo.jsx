export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`} key={user.key}>
    {user.name}
  </a>
);
