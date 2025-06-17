import NavLinks from './header/NavLinks'
import Logo from '../../../components/header&footer/logo'
import SearchInput from './header/searchInput'
import LanguageButton from './header/languageButton'
import Avatar from './header/avatar'
export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f2f1] px-10 py-3">
      <div className="flex items-center gap-8">
        <Logo />
        <NavLinks />
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <SearchInput />
        <LanguageButton />
        <Avatar url="https://lh3.googleusercontent.com/aida-public/AB6AXuAoPc-FN18rBBJ_qTLDk3zATTxuQuQifk8bPpit-ZRmUhqHkxtrKSYRxr9IMDILnxZq4eZSSZSdmdZ8lFzQbO0B2PlL8sY7RVx8yraham4P31HLi9f1r_ZQs0JsmsjDekXaPvkJXujOi7ssaIefHYxz__-juzcjYiWNW7LfMCC1UfF-2DGKCKOSMBLSyF84598hXDlwAT2RV9zhJg2eJogbi2920EJmsbF9AV7brWSlgXdlsMeKTsxA0tLmVJe9RHQmLNlg6Q3Ga68" />
      </div>
    </header>
  );
}
