import React from "react";
import { Link } from "react-router-dom";
import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
  } from "carbon-components-react/lib/components/UIShell";

  import Settings20 from "@carbon/icons-react/lib/settings/20";

  
  const PageHeader = () => (
  <Header aria-label="Carbon Tutorial">
      <SkipToContent />
      <HeaderName element={Link} to="/" prefix="">
          API tests
      </HeaderName>
      <HeaderMenuItem element={Link} to="/Synonyms">
          Synonyms
      </HeaderMenuItem>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Settings">
            <Settings20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
  </Header>
  );
  export default PageHeader;
  