# infrastructure/Dockerfile.ml
FROM python:3.11

# ① 作業ディレクトリ
WORKDIR /app

# ② 依存ライブラリ
COPY ml/requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

# ③ コード一式を /ml にコピー
COPY ml /ml

# ④ エントリポイント
CMD ["python", "/ml/src/predict.py"]
