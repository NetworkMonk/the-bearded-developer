"use client";

import { lexend } from "@/app/fonts";

export default function ZohoNewsletterForm() {
  return (
    <>
      <div id="customForm">
        <div name="SIGNUP_BODY">
          <div>
            {/* Heading hidden — footer card already provides context */}
            <div id="SIGNUP_HEADING" className="hidden" />

            <div style={{ position: "relative" }}>
              {/* Success message — shown by Zoho JS */}
              <div
                id="Zc_SignupSuccess"
                style={{ display: "none" }}
                className="mb-3 px-4 py-3 rounded-lg bg-brand-teal/20 border border-brand-teal/40 text-brand-light-blue text-sm"
              >
                <span id="signupSuccessMsg">Thank you for signing up.</span>
              </div>
            </div>

            <form
              method="POST"
              id="zcampaignOptinForm"
              action="https://zcv2-zcmp.maillist-manage.eu/weboptin.zc"
              target="_zcSignup"
              onSubmit={(e) => {
                const spm = e.currentTarget.querySelector("#zc_spmSubmit");
                if (spm) spm.remove();
              }}
            >
              {/* Error message — shown by Zoho JS */}
              <div
                id="errorMsgDiv"
                className="hidden mb-3 text-sm text-red-400"
              >
                Please correct the marked field(s) below.
              </div>

              {/* Input + button row */}
              <div className="flex gap-2 flex-col sm:flex-row">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Your email address"
                    changeitem="SIGNUP_FORM_FIELD"
                    name="CONTACT_EMAIL"
                    id="EMBED_FORM_EMAIL_LABEL"
                    className={`w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors duration-200 ${lexend.className}`}
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    name="SIGNUP_SUBMIT_BUTTON"
                    id="zcWebOptin"
                    value="Subscribe"
                    className={`px-5 py-2.5 rounded-lg bg-brand-teal text-white text-sm font-semibold cursor-pointer hover:bg-brand-blue transition-colors duration-200 whitespace-nowrap ${lexend.className}`}
                  />
                </div>
              </div>

              <input type="hidden" id="fieldBorder" value="" />
              <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
              <input type="hidden" id="emailReportId" name="emailReportId" value="" />
              <input type="hidden" id="formType" name="formType" value="QuickForm" />
              <input type="hidden" name="zx" id="cmpZuid" value="14aec52267" />
              <input type="hidden" name="zcvers" value="2.0" />
              <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
              <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
              <input type="hidden" id="zcld" name="zcld" value="13c03951893ff0f4" />
              <input type="hidden" id="zctd" name="zctd" value="13c03951893fe541" />
              <input type="hidden" id="document_domain" value="" />
              <input type="hidden" id="zc_Url" value="zcv2-zcmp.maillist-manage.eu" />
              <input type="hidden" id="new_optin_response_in" value="0" />
              <input type="hidden" id="duplicate_optin_response_in" value="0" />
              <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
              <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zaab402951d80eb38a59d55793737e47160b4b3412ec92116d03045216a76bfb8" />
              <input type="hidden" id="viewFrom" value="URL_ACTION" />
              <input type="hidden" id="scriptless" name="scriptless" value="yes" />
              <input type="hidden" id="zc_spmSubmit" name="zc_spmSubmit" value="ZCSPMSUBMIT" />
            </form>
          </div>
        </div>
      </div>

      {/* Zoho overlay and success popup — kept for JS compatibility */}
      <div
        id="zcOptinOverLay"
        onContextMenu={(e) => e.preventDefault()}
        style={{ display: "none", textAlign: "center", backgroundColor: "rgb(0, 0, 0)", opacity: 0.5, zIndex: 100, position: "fixed", width: "100%", top: "0px", left: "0px", height: "988px" }}
      />
      <div
        id="zcOptinSuccessPopup"
        style={{ display: "none", zIndex: 9999, width: "800px", height: "40%", top: "84px", position: "fixed", left: "26%", backgroundColor: "#FFFFFF", borderColor: "#E6E6E6", borderStyle: "solid", borderWidth: "1px", boxShadow: "0 1px 10px #424242", padding: "35px" }}
      >
        <span style={{ position: "absolute", top: "-16px", right: "-14px", zIndex: 99999, cursor: "pointer" }} id="closeSuccess">
          <img src="https://zcv2-zcmp.maillist-manage.eu/images/videoclose.png" alt="" />
        </span>
        <div id="zcOptinSuccessPanel" />
      </div>
    </>
  );
}
