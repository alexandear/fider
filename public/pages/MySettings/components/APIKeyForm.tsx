import * as React from "react";
import { Button } from "@fider/components";
import { actions } from "@fider/services";

interface APIKeyFormState {
  apiKey?: string;
}

export class APIKeyForm extends React.Component<{}, APIKeyFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  private renegerate = async () => {
    const result = await actions.regenerateAPIKey();
    if (result.ok) {
      this.setState({ apiKey: result.data.apiKey });
    }
  };

  private showAPIKey() {
    return (
      <>
        <p className="info">
          Your new API Key is: <code>{this.state.apiKey}</code>
        </p>
        <p className="info">Stored it securely on your servers and never store it in the client side of your app.</p>
      </>
    );
  }

  public render() {
    return (
      <div className="l-api-key">
        <h4>API Key</h4>
        <p className="info">
          The API Key is only shown whenever generated. If your Key is lost or has been compromised, generated a new one
          and take note of it.
        </p>
        <p className="info">
          To learn how to use the API, read the{" "}
          <a href="https://getfider.com/docs/api" target="_blank">
            official documentation
          </a>
          .
        </p>
        <p>
          <Button size="tiny" onClick={this.renegerate}>
            Regenerate API Key
          </Button>
        </p>
        {this.state.apiKey && this.showAPIKey()}
      </div>
    );
  }
}
