"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { FloatingBanner } from "./FloatingBanner";
import Cookies from "universal-cookie";
import PropTypes from "prop-types";

export function ConsentForm() {
  const [decisionMade, setDecisionMade] = useState(true); // start with true to avoid flashing
  const cookies = useMemo(() => new Cookies(), []);

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  const sendConsent = useCallback((consent) => {
    gtag("consent", "update", consent);
    gtag("event", "cookie_consent_update");
  }, []);

  useEffect(() => {
    if (cookies.get("cookie_consent") !== undefined) {
      setDecisionMade(true);
      gtag("event", "cookie_consent_update");
    } else {
      setDecisionMade(false);
    }
  }, [cookies, setDecisionMade, sendConsent]);

  const handleDecision = (outcome) => {
    const consent = {
      ad_storage: outcome,
      analytics_storage: outcome,
      ad_user_data: outcome,
      ad_personalization: outcome,
    };

    cookies.set("cookie_consent", consent, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: "/",
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    });

    sendConsent(consent);
    setDecisionMade(true);
  };

  return decisionMade ? (
    <></>
  ) : (
    <FloatingBanner
      header="Consent Header"
      message="Consent message"
      acceptText="Yes"
      denyText="No"
      onAccept={() => {
        handleDecision("granted");
      }}
      onDeny={() => {
        handleDecision("denied");
      }}
    />
  );
}
