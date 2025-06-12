import React from 'react';

export default function ConfusionMatrixApp() {
  const [tp, setTp] = React.useState(0);
  const [fp, setFp] = React.useState(0);
  const [tn, setTn] = React.useState(0);
  const [fn, setFn] = React.useState(0);

  // Calculate metrics
  const total = tp + fp + tn + fn;
  const accuracy = total ? (tp + tn) / total : 0;

  const precisionDenominator = tp + fp;
  const precision = precisionDenominator === 0 ? 0 : tp / precisionDenominator;

  const recallDenominator = tp + fn;
  const recall = recallDenominator === 0 ? 0 : tp / recallDenominator;

  const f1 = (precision + recall) === 0 ? 0 : 2 * precision * recall / (precision + recall);

  const specificityDenominator = tn + fp;
  const specificity = specificityDenominator === 0 ? 0 : tn / specificityDenominator;

  const falsePositiveRate = (fp + tn) === 0 ? 0 : fp / (fp + tn);

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: 'auto' }}>
      <h1>Confusion Matrix</h1>
      <table border="1" style={{ width: '50%', margin: '20px auto' }}>
        <thead>
          <tr>
            <th>Actual Positive</th>
            <th>Actual Negative</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>True Positive: {tp}</td>
            <td>False Negative: {fn}</td>
          </tr>
          <tr>
            <td>False Positive: {fp}</td>
            <td>True Negative: {tn}</td>
          </tr>
        </tbody>
      </table>

      <h2>Sliders</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>TP:</label>
        <input type="range" min="0" max="100" value={tp} onChange={(e) => setTp(parseInt(e.target.value, 10))} />
        <span>{tp}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>FP:</label>
        <input type="range" min="0" max="100" value={fp} onChange={(e) => setFp(parseInt(e.target.value, 10))} />
        <span>{fp}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>TN:</label>
        <input type="range" min="0" max="100" value={tn} onChange={(e) => setTn(parseInt(e.target.value, 10))} />
        <span>{tn}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>FN:</label>
        <input type="range" min="`0" max="100" value={fn} onChange={(e) => setFn(parseInt(e.target.value, 10))} />
        <span>{fn}</span>
      </div>

      <h2>Metrics</h2>
      <p>Accuracy: {accuracy.toFixed(4)}</p>
      <p>Precision: {precision.toFixed(4)}</p>
      <p>Recall (Sensitivity): {recall.toFixed(4)}</p>
      <p>F1 Score: {f1.toFixed(4)}</p>
      <p>Specificity (True Negative Rate): {specificity.toFixed(4)}</p>
      <p>False Positive Rate: {falsePositiveRate.toFixed(4)}</p>
    </div>
  );
}
