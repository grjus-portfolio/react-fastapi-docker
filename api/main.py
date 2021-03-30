from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from random import randrange
import uvicorn

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/return-random")
async def random():
    return {"number": randrange(10, 1000)}


@app.get("/")
async def main():
    return {"greeting": "Greetings from fast-API"}


@app.get("/about")
async def about():
    return {"about": "This is about content"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info")
