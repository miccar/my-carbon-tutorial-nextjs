import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import Link from 'next/link';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="/">
          <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
        </Link>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <Link href="/repos" passHref legacyBehavior>
            <HeaderMenuItem>Repositories</HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <HeaderNavigation aria-label="Carbon Tutorial 2">
          <Link href="/repos2" passHref legacyBehavior>
            <HeaderMenuItem>Repositories 2</HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <HeaderNavigation aria-label="Carbon Tutorial 3">
          <Link href="/pippo/1/release" passHref legacyBehavior>
            <HeaderMenuItem>Release</HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <HeaderNavigation aria-label="Carbon Tutorial 4">
          <Link href="/pippo/1/workflow/2" passHref legacyBehavior>
            <HeaderMenuItem>Workflow</HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <Link href="/repos" passHref legacyBehavior>
                <HeaderMenuItem>Repositories</HeaderMenuItem>
              </Link>
            </HeaderSideNavItems>
          </SideNavItems>
          <SideNavItems>
            <HeaderSideNavItems>
              <Link href="/repos2" passHref legacyBehavior>
                <HeaderMenuItem>Repositories 2</HeaderMenuItem>
              </Link>
            </HeaderSideNavItems>
          </SideNavItems>
          <SideNavItems>
            <HeaderSideNavItems>
              <Link href="/pippo/1/release" passHref legacyBehavior>
                <HeaderMenuItem>Release</HeaderMenuItem>
              </Link>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center"
            className="action-icons">
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Language"
            tooltipAlignment="center"
            className="action-icons">
            IT
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
            className="action-icons">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
